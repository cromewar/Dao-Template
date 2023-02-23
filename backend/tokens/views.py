from django.shortcuts import render
import json
from .services import get_token_balance
from django.http import HttpResponse

# Create your views here.
def get_balance(requests):
    address = requests.GET.get("address")
    result = get_token_balance(address)
    result_json = json.dumps(result)
    return HttpResponse(result_json, content_type="application/json")
