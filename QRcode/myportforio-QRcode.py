import qrcode
url = "https://suu0sgwr.github.io/about/"
img = qrcode.make(url)
img.save("myportforio-QRcode.png")