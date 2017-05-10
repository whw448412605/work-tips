CSS �����Լ

������Լ

���Ƽ�������ʹ�������ո�
/* bad */
.mod-example {
    padding-left: 15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
��ÿ���������������ǰ���һ���ո�
/* bad */
.mod-example{
  padding-left: 15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
���Ƽ�����������һ�����Ӧ����������
/* bad */
.mod-example {
  padding-left: 15px;}

/* good */
.mod-example {
  padding-left: 15px;
}
ÿ���������� : ��Ӧ�ò���һ���ո�ǰ���޿ո�
/* bad */
.mod-example {
  padding-left:15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
����������䶼�ԷֺŽ�β������ʡ�Բ�д
/* bad */
.mod-example {
  padding-left: 15px
}

/* good */
.mod-example {
  padding-left: 15px;
}
ѡ������Լ

Ϊѡ��������ʱ����������ѡ������������һ��
/* bad */
.selector, .selector-secondary {
  padding-left: 15px;
}

/* good */
.selector,
.selector-secondary {
  padding-left: 15px;
}
Ϊѡ�����е��������˫����
/* bad */
.selector[type=text] {
  padding-left: 15px;
}

/* good */
.selector[type="text"] {
  padding-left: 15px;
}
����ѡ�����㼶��Ҫ����5��
/* bad */
.main .top .left .mod-a .content .detail {
  padding-left: 15px;
}

/* good */
.mod-a .content .detail {
  padding-left: 15px;
}
���Թ�Լ

����˳��

���Ƽ���������ص�����˵������һ�飬�����������˳�����У�

��λ��position��left��right��top��bottom��z-index��
����ģ�ͣ�display��float��width��height��margin��padding��border��border-radius��
��ӡ��font��color��background��line-height��text-align��
���ڶ�λ���Դ��������ĵ������Ƴ�Ԫ�أ����һ��ܸ��Ǻ�ģ����ص���ʽ�����������λ������ģ�;���������ĳߴ��λ�ã������ŵڶ�λ����ӡֻ��Ӱ��Ԫ�ص�ϸ����ʽ�仯�����Էŵ���λ��
/* bad */
.mod-example {
  font: normal 13px "Helvetica Neue", sans-serif;
  display: block;
  position: absolute;
  z-index: 100;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 1.5;
  text-align: center;
}

/* good */
.mod-example {
  /* ��λ */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  /* ��ģ�� */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 15px auto;
  padding: 10px 15px;
  border: 1px solid #ccc;
  /* ��ӡ */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
  text-align: center;
}
��д��ʽ����������

���� background �� font ��������д��ʽ������������Ҫô����ʽ�������е�ֵ��Ҫô�Ͳ�Ҫʹ�ü�д��ʽ��
/* bad */
.mod-example {
  font: normal 13px;
  background: red;
  background: url(image.jpg);
  }

/* good */
.element {
  font-style: normal;
  font-size: 13px;
  background-color: red;
  background-image: url(image.jpg);
}
0 �� ��λ

ʡ�� ��0�� ֵ����ĵ�λ����Ҫ�� 0 ֵ����ʹ�õ�λ��������ֵ��
/* bad */
.mod-example {
  padding-left: 0px;
}

/* good */
.mod-example {
  padding-left: 0;
}
��ɫֵʮ�����Ʊ�ʾ��

�ڿ��ܵ�����£�ʹ�� 3 ���ַ���ʮ�����Ʊ�ʾ������ʼ��ʹ��Сд��ʮ����������
/* bad */
.mod-example {
  color: #cccccc;
  background-color: #efefef;
}

/* good */
.mod-example {
  color: #ccc;
  background-color: #efefef;
}
Ӧ����16���Ʊ�ʾ����rgb��ʾ�����õ������������ʹ��16���Ʊ�ʾ��
/* bad */
.example-part1 {
  color: #efefef;
}
.example-part2 {
  color: rgb(252, 252, 252);
}

/* good */
.example-part1 {
  color: #efefef;
}
.example-part2 {
  color: #fcfcfc;
}
С��

����ʹ�õ�С���������ʡ��ǰ�ߵ� 0
/* bad */
.mod-example {
  opacity: 0.5;
}

/* good */
.mod-example {
  opacity: .5;
}
����

����ѡ����������ֵ��˫���� "" ���������� URI ֵ url() ��Ҫʹ���κ�����
/* bad */
body {
  font-family: open sans, arial, sans-serif;
  background-image: url('http://taobao.com/');
}

/* good */
body {
  font-family: "open sans", arial, sans-serif;
  background-image: url(http://taobao.com/);
}
�Զ��� font-family

�����Զ���� font-family ����������ʹ��ҵ������ǰ׺��Ϊ���ֵĿ�ʼ�������Ա�����ֵ��Զ������壺
/* bad */
@font-face {
  /* �����ҵ���Զ������� */
  font-family: icon-font;
  src: url(//at.alicdn.com/t/font_1426561436_1444216.eot);
}

@font-face {
  /* �����ҵ���Զ������� */
  font-family: guang-iconfont; 
  src: url(//at.alicdn.com/t/font_1426561436_1444216.eot);
}
ý���ѯ��Media query����Լ

ý���ѯ���������Ҫ��������������֯��ʽ��
��ý���ѯ���ھ�������ع���ĸ�������Ҫ�����ĵ��ײ����������ױ�����ά����������
ý���ѯ���ÿһ������Ļ�����С�С���ķֱ𵥶���֯Ϊһ���ļ�
Example1:
.element { 
}
.element-avatar { 
}
.element-selected { 
}

@media (min-width: 480px) {
  .element {
  }
  .element-avatar {
  }
  .element-selected {
  }
}
Example2:
/* base.css */
.element {
}
.element-avatar {
}
.element-selected {
}
/* base-media-small.css */
@media (min-width: 480px) {
  .element {
  }
  .element-avatar {
  }
  .element-selected {
  }
}
ע�͹�Լ

����ע��

��������������д��ά���ġ���֤��Ĵ����������Եģ������õ�ע�ͣ��������ױ�������⡣�õĴ���ע�ʹ��������ĺ�Ŀ�ꡣ��Ҫ�򵥵������������ class ���ơ�
/* bad */

/* Modal header */
.modal-header {
}

/* good */

/* Wrapping element for .modal-title and .modal-close */
.modal-header {
}
�ļ�ע��

�ļ�ע�ͣ����������ļ�ͷ���������ļ���Ԫ��Ϣ����������ļ���������ʲô���������ӣ�
/**
 * ����ļ���������ʲô����������
 */
body {
  color: red;
}
������Լ

Сд��ĸ�����ַ��������»��ߣ�Ҳ�����շ���������
/* bad */
.mod_example {
  padding-left: 15px;
}
.modExample {
  padding-left: 15px;
}

/* good */
.mod-example {
  padding-left: 15px;
}
��Ҫ�� javascript ��ʹ�õ������� J_ ��ͷ���ӡ����շ塱���������� J_ExampleClass�� ��������� class ���ܳ����� CSS �ļ���
<!-- Bad Html Class for Javascript Hook -->
<div class="mod-example"></div>

<!-- Good Html Class for Javascript Hook -->
<div class="J_ExampleClass">Just a Example</div>