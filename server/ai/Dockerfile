FROM python:3.7

RUN pip install fastapi uvicorn

EXPOSE 5001

COPY . .

CMD ["uvicorn", "app.service:app", "--host", "ai-services.firstapp.wcccloud.local", "--port", "5001"]