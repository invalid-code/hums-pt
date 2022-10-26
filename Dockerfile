FROM python:3.10.2

COPY ./requirements.txt ./

RUN pip install -r ./requirements.txt

ENV PORT 8080

WORKDIR .

CMD [ "exec", "gunicorn", "--bind", ":$PORT", "--workers", "1", "--threads", "8", "app:app" ]
