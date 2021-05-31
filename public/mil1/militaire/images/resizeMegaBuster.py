from PIL import Image
import os, sys
import glob


for filename in glob.iglob('**/*.jpg', recursive=True):
    print(filename)
    basewidth = 300
    im = Image.open(filename)
    wpercent = (basewidth/float(im.size[0]))
    hsize = int((float(im.size[1])*float(wpercent)))
    imResize = im.resize((basewidth,hsize), Image.ANTIALIAS)
    imResize.save(filename , 'JPEG', quality=90)

for filename in glob.iglob('**/*.png', recursive=True):
    print(filename)
    basewidth = 300
    im = Image.open(filename)
    wpercent = (basewidth/float(im.size[0]))
    hsize = int((float(im.size[1])*float(wpercent)))
    imResize = im.resize((basewidth,hsize), Image.ANTIALIAS)
    imResize.save(filename , 'PNG', quality=90)

