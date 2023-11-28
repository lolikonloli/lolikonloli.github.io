# OpenCV基础操作一




# OpenCV基础操作一

* #图像格式#

  opencv:array[H, W, C]

  通道顺序[B, G, R]
* #读取图片#

  ```python
  cv2.imread(imgpath)
  ```

* #画矩形#

  ```python
  cv2.rectangle(img, pt1, pt2, color, thickness, lineType, shift )
  (图片，长方形框左上角坐标, 长方形框右下角坐标， 字体颜色，字体粗细)
  ```
* #放置文字#

  ```python
  cv.putText(blank, 'Hello, OpenCV!!!', (0, 225), cv.FONT_HERSHEY_TRIPLEX, 1.0, (255, 0, 0), 2)

  cv2.putText(image, text, (5,50 ), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 255), 2)


  各参数依次是：图片，添加的文字，左上角坐标，字体，字体大小，颜色，字体粗细
  ```
* #图片通道转换#

  ```python
  # 方法一：
  repeat = 50000
  im = cv2.imread('lena512_colour.png')

  start = time.time()
  for i in range(repeat):
      b, g, r = cv2.split(im)
      im_rgb1 = cv2.merge([r, g, b])
  print('method 1 - total time of %d is %.3f s' % (repeat, time.time()-start))
  # method 1 - total time of 50000 is 9.279 s

  # 方法二：
  repeat = 50000
  im = cv2.imread('lena512_colour.png')
  start = time.time()
  for i in range(repeat):
      im_rgb2 = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)
  print('method 2 - total time of %d is %.3f s' % (repeat, time.time()-start))
  # method 2 - total time of 50000 is 1.602 s

  # 方法三：
  repeat = 50000
  im = cv2.imread('lena512_colour.png')
  start = time.time()
  for i in range(repeat):
      im_rgb3 = im[: , : , ::-1]
  print('method 3 - total time of %d is %.3f s' % (repeat, time.time()-start))
  # method 3 - total time of 50000 is 0.027 s
  ```

　　‍


---

> 作者: lolikonloli  
> URL: /opencv-basic-operation-1-z2ar0rs/  

