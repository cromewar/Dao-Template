from moralis import evm_api, auth
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("MORALIS_API_KEY")


def get_token_balance(address):
    params = {
        "address": address,
        "chain": "0x5",
        "token_addresses": ["0x761D630b3697a58B9c741b4D54B27226237792BC"],
    }

    result = evm_api.token.get_wallet_token_balances(
        api_key=api_key,
        params=params,
    )

    return result
