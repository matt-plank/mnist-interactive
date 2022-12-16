from flask import Flask
from flask_cors import CORS
from flask_restful import Api

from .routes.prediction import Prediction


def create_app() -> Flask:
    """Initialise the app with routes and config."""
    app = Flask(__name__)
    api = Api(app)
    CORS(app)

    # Register api routes
    api.add_resource(Prediction, "/prediction")

    return app
