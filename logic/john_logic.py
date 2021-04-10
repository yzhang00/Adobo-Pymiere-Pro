from PIL import Image, ImageFont, ImageDraw
from moviepy.editor import *


def add_text_to_image(image=Image, text=str, font=str, size=int, offset=tuple, color=tuple) -> Image:
    valid_parameters = isinstance(image, Image.Image)
    valid_parameters = valid_parameters and isinstance(text, str)
    valid_parameters = valid_parameters and isinstance(font, str)
    valid_parameters = valid_parameters and isinstance(size, int)
    valid_parameters = valid_parameters and isinstance(offset, tuple)
    valid_parameters = valid_parameters and isinstance(color, tuple)
    if not valid_parameters:
        return None
    if len(offset) != 2 or len(color) != 3:
        return None
    font = ImageFont.truetype(font, size)
    draw = ImageDraw.Draw(image)
    draw.text(offset, text, color, font=font)
    return image


def store_image_in_filesystem(image=Image, filename=str) -> Image:
    valid_parameters = isinstance(image, Image.Image)
    valid_parameters = valid_parameters and isinstance(filename, str)
    if not valid_parameters:
        return None
    image.save(filename)
    return image


def change_volume(clip=VideoFileClip, factor=float) -> VideoFileClip:
    valid_parameters = isinstance(clip, VideoFileClip)
    valid_parameters = valid_parameters and isinstance(factor, float)
    if not valid_parameters:
        return None
    clip = clip.volumex(factor)
    return clip


def audio_normalize_effect(clip=VideoFileClip) -> VideoFileClip:
    valid_parameters = isinstance(clip, VideoFileClip)
    if not valid_parameters:
        return None
    clip = clip.fx(afx.audio_normalize)
    return clip


def audio_fade_effect(clip=VideoFileClip, fade_in=int, fade_out=int) -> VideoFileClip:
    valid_parameters = isinstance(clip, VideoFileClip)
    valid_parameters = valid_parameters and isinstance(fade_in, int)
    valid_parameters = valid_parameters and isinstance(fade_out, int)
    if not valid_parameters:
        return None
    clip = clip.fx(afx.audio_fadein, fade_in)
    clip = clip.fx(afx.audio_fadeout, fade_out)
    return clip


# cl = VideoFileClip("munobrars.mp4")
# # cl = change_volume(cl, 0.0)
# # cl = audio_normalize_effect(cl)
# cl = audio_fade_effect(cl, 5, 5)
# cl.write_videofile("munobrarsnew.webm")

# im = Image.open("hopper.jpg")
# add_text_to_image(im, "hello", "arial.ttf", 50, (50, 50), (200, 200, 200))
# store_image_in_filesystem(im, "hellohop.jpg")
