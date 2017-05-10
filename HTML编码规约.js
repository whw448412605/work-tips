HTML �����Լ

������Լ

HTML5 doctype

��ÿ�� HTML ҳ�濪ͷʹ������򵥵� doctype �����ñ�׼ģʽ��ʹ��ÿ��������о�����һ�µ�չ�֡�

<!-- bad -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
  </head>
</html>

<!-- good -->
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
�ַ�����

������ʷԭ����ϵ��ͬ��Ʒ���ǲ����˲�ͬ���ַ����롣�����Ժ����ҵ����������Ҫ��ͳһʹ�� UTF-8 �ַ����룬����ͳһ��

Language attribute

���� HTML5 ��Լ��

������վ������ html Ԫ����ָ�� lang ���ԣ���ָ��ҳ������ԡ������������������Ժϳɹ�����ȷ�������������Լ����빤�߾���ʹ�õĹ��򣬵ȵȡ�
ͨ����Լ�е� lang �����˽����������ݡ�

ISO Language Codes

IE ����ģʽ

Internet Explorer ֧��ʹ�ü����� <meta> ��ǩ��ָ��ʹ��ʲô�汾�� IE ����Ⱦҳ�档�������������Ҫ��ͨ��ͨ�� edge mode ��֪ͨ IE ʹ�����µļ���ģʽ��

<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
���� CSS �� JavaScript

���� HTML5 ��Լ, ͨ�������� CSS �� JavaScript ʱ����Ҫָ�� type����Ϊ text/css �� text/javascript �ֱ������ǵ�Ĭ��ֵ��
<!-- bad -->
<!DOCTYPE html>
<head>
  <link type="text/css" rel="stylesheet" href="code-guide.css">
  <script type="text/javascript" src="example.js"></script>
</head>

<!-- good -->
<!DOCTYPE html>
<head>
  <link rel="stylesheet" href="code-guide.css">
  <script src="example.js"></script>
</head>
���⣬���� CSS ������ <head></head> ��ǩ�����롣�������� Javascript�����˻�����ȱȽϻ����ԵĽű��ļ����������ڿ��� body ������ǩǰ�����롣
<!-- bad -->
<!DOCTYPE html>
<html>
  <head>
    <script src="mod-a.js"></script>
    <script src="jquery.js"></script>
  </head>
  <body>
      <style>
          .mod-example {
              padding-left: 15px
          }
      </style>
  </body>
</html>

<!-- good -->
<!DOCTYPE html>
<html>
  <head>
    <style>
      .mod-example {
        padding-left: 15px
      }
    </style>
    <script src="jquery.js"></script>
  </head>
  <body>
  </body>
</html>
����ʹ�������ո�

<!-- bad -->
<div>
    <p>just a example</p>
</div>

<!-- good -->
<div>
  <p>just a example</p>
</div>
��ǩ���ƺͱ�ǩ����ͳһʹ��Сд

<!-- bad -->
<Div Id="test">
</Div>

<!-- good -->
<div id="test">
</div>
����� html ���ּ�

�������Լ���Եó����潨��� html ���ּܣ�

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta lang="zh">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="description" content="">
    <meta name="keyword" content="">
    <title>�Ա���</title>
    <link rel="stylesheet" href="example.css">
  </head>
  <body>
      <script src="example.js"></script>
  </body>
</html>
���Թ�Լ

����������˫����

<!-- bad -->
<link rel='stylesheet' href='example.css'>

<!-- good -->
<link rel="stylesheet" href="example.css">
Boolean ����

Boolean ����ָ����Ҫ����ȡֵ�����ԡ�XHTML ��Ҫÿ����������ȡֵ������ HTML5 ������Ҫ��

�˽�������ݣ��ο� [WhatWG section on boolean attributes]:

һ��Ԫ���� Boolean ���ԵĴ��ڱ�ʾȡֵ true�����������ʾȡֵ false��
�����֮��������ҪΪ Boolean �������ȡֵ��

<!-- bad -->
<input type="text" disabled="disabled">

<input type="checkbox" value="1" checked="checked">

<select>
  <option value="1" selected="selected">1</option>
</select>

<!-- good -->
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
�Զ�������

�����Զ������Ա����� data- Ϊǰ׺�������Ķ���

<!-- bad -->
<a modal="toggle" href="#">
  Example link
</a>

<!-- good -->
<a data-modal="toggle" href="#">
  Example link
</a>
����˳��

HTML ����Ӧ�ð����ض���˳������Ա�֤�׶��ԣ�����һ�µ�����˳��������� 1.5% �� gzip ѹ����

class
id, name
data-*
...
Classes ��Ϊ�߿ɸ��������Ƶģ��������Ǵ��ڵ�һλ��Ids ���Ӿ������Ӧ�þ�����ʹ�ã�����, ҳ����ǩ�����������Ǵ��ڵڶ�λ��

<!-- bad -->
<a href="#" data-modal="toggle" id="... class="..."">
  Example link
</a>

<input type="text" class="form-control">

<!-- good -->
<a class="..." id="..." data-modal="toggle" href="#">
  Example link
</a>

<input class="form-control" type="text">
��ǩ��Լ

��Ҫ���Զ��պϱ�ǩ�Ľ�β��ʹ��б�ߣ��� <br>��<hr>��<input>��<meta>��<source>

������Լ

������Ҫ�Զ������ԣ�����������ͳһʹ�� data- ǰ׺������ο� custom-data-attribute
class ������ CSS �����Լ�еı���һ��
id ����������Ϊ JS ����ʹ�� ʱ���� J_ Ϊǰ׺������Ӵ��շ�������������ѡ�������ܳ����� css �У����� J_ExampleIdForJs������ʹ���÷�������䵱ê�㣬label ��Ӧ input �� id��������Ĭ��ʹ�ü��ɡ�
��ý���˻�

Ϊ img ��ǩ��� alt ��������������ı���
�ڶ�ý���ǩ�ڲ��ṩָʾ�������֧�ָñ�ǩ��˵������ object��audio��video
���ӣ�

<!-- bad -->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>

<!-- good -->
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
ע�͹�Լ

���� html ����һ�㲻�ᾭ��Ԥ�������ڰ�ȫ���ǣ�html �����в��ܳ����κι���ҵ�����������Ϣ��ע�͡�