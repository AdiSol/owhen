from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def test():
    return "Testing 1 2 3"