import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Prescriptions')

def lambda_handler(event, context):

    params = event.get('queryStringParameters') or {}
    prescription_id = params.get('id')

    if not prescription_id:
        return {
            'statusCode': 400,
            'headers': {
                "Access-Control-Allow-Origin": "*"
            },
            'body': json.dumps({"message": "Prescription ID required"})
        }

    response = table.get_item(
        Key={'PrescriptionID': prescription_id}
    )

    item = response.get('Item')

    if item:

        return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Origin": "*"
            },
            'body': json.dumps({
                "status": "Valid Prescription",
                "PrescriptionID": item.get("PrescriptionID"),
                "DoctorName": item.get("DoctorName"),
                "PatientName": item.get("PatientName"),
                "EncryptedData": item.get("EncryptedData"),
                "FileURL": item.get("FileURL", "")
            })
        }

    else:

        return {
            'statusCode': 404,
            'headers': {
                "Access-Control-Allow-Origin": "*"
            },
            'body': json.dumps({
                "status": "Prescription Not Found"
            })
        }
