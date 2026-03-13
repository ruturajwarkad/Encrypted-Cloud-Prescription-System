import json
import boto3
import uuid
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Prescriptions')

def lambda_handler(event, context):

    try:

        body = json.loads(event['body'])

        doctor = body.get('doctor', '')
        patient = body.get('patient', '')
        data = body.get('data', '')
        file_url = body.get('file', '')   # NEW: file URL from S3

        prescription_id = str(uuid.uuid4())

        table.put_item(
            Item={
                'PrescriptionID': prescription_id,
                'DoctorName': doctor,
                'PatientName': patient,
                'EncryptedData': data,
                'FileURL': file_url,
                'Timestamp': str(datetime.now())
            }
        )

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "PrescriptionID": prescription_id
            })
        }

    except Exception as e:

        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "error": str(e)
            })
        }
