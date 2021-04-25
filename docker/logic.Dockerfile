FROM python:3

RUN mkdir docker_root
RUN cd docker_root
WORKDIR /docker_root
RUN mkdir logic

ADD /logic /docker_root/logic
ADD /tests/arial.ttf /docker_root/logic/arial.ttf
ADD requirements.txt /docker_root

RUN pip install -r requirements.txt
RUN apt-get update
RUN echo "y" | apt-get install ffmpeg

EXPOSE 5000


CMD ["python", "-m", "logic.flask_create"]