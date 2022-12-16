from flask_restful import Resource


class Prediction(Resource):
    """Resource representing model predictions."""

    def get(self) -> tuple[dict, int]:
        """Get a prediction from the current state of the canvas."""
        return {"prediction": 7}, 200
