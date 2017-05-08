/**
 * ����Ҫ�����Լӳ���ǰ׺
 * @method prefix
 * @param {String} $property ָ������
 * @param {String} $value ָ������ֵ
 */
@mixin prefix($property, $value) {
    // �Ƿ�������ǰ׺֧��
    @if map-get($setting, is-vendor-prefix) {
        // ����������̴���
        @each $vendor in map-get($setting, vendor-prefix) {
            #{$vendor}#{$property}: $value;
        }
    }
    #{$property}: $value;
}

/**
 * ��������
 * @method calc
 * @param {String} $property ָ����Ҫ���м����CSS����
 * @param {String} $value ��ԭ��CSS�﷨һ�£�ʹ�÷�ʽ�磺@include calc(width, #{100%} - #{.1rem});
 */
@mixin calc($property, $value) {
    // �Ƿ�������ǰ׺֧��
    @if map-get($setting, is-vendor-prefix) {
        // ����������̴���
        @each $vendor in map-get($setting, vendor-prefix) {
            #{$property}: #{$vendor}calc(#{$value});
        }
    }
    #{$property}: calc(#{$value});
}

/**
 * ���彥��ɫֵ
 * @method gradient
 * @param {String} $type ָ�������4�����ͣ�linear, repeating-linear, radial, repeating-radial
 * @param {String} $gradient ָ������ȡֵ����w3c����ԭ���﷨һ��
 */
@mixin gradient($type, $gradient...) {
    @if map-get($setting, is-vendor-prefix) {
        @each $vendor in map-get($setting, vendor-prefix) {
            background-image: #{$vendor}#{$type}-gradient($gradient);
        }
    }
    background-image: #{$type}-gradient($gradient);
}

/**
 * ������Ӧʽ����
 * @method responsive
 * @param {String} $media ָ��ý���ѯ����
 */
@mixin responsive($media) {
    @if not map-has-key($media-types, $media) {
        @warn "#{$media} is not a known media type. Using portrait instead.";
        $media: portrait;
    }
    @media #{map-get($media-types, $media)} {
        @content;
    }
}

/**
 * ��������ͼ��
 * @method yofont
 */
@mixin yofont() {
    // �Ƿ���ͼ������
    @if map-get($ico, is-use) {
        @font-face {
            font-family: map-get($ico, font-name);
            // ���ֻ��Ҫ���е�ĳ�����壬�����ļ����������ʹ�ÿ��ļ����������󣩣����������
            // IE9 - ������IE9
            // src: url("#{map-get($ico,font-path)}#{map-get($ico,font-name)}.eot");
            src:
                // IE6-8 - ������
                // url("#{map-get($ico,font-path)}#{map-get($ico,font-name)}.eot?#iefix") format("embedded-opentype"),
                // chrome��firefox
                url("#{map-get($ico,font-path)}#{map-get($ico,font-name)}.woff") format("woff"),
                // chrome��firefox��opera��Safari, Android, iOS 4.2+
                url("#{map-get($ico,font-path)}#{map-get($ico,font-name)}.ttf") format("truetype");
                // iOS 4.1- - ������
                // url("#{map-get($ico,font-path)}#{map-get($ico,font-name)}.svg#iconfont") format("svg");
        }
        .yo-ico {
            font-family: map-get($ico, font-name) !important;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            // PC��chrome�о�����⣬Mobile����Ҫ
            // -webkit-text-stroke-width: .1px;
            -moz-osx-font-smoothing: grayscale;
            vertical-align: middle;
        }
    }
}

/**
 * �˾�
 * @method filter
 * @param {String} $filter ȡֵ��ԭ���﷨һ��
 */
@mixin filter($filter...) {
    @include prefix(filter, $filter);
}

/**
 * ����UAĬ�����
 * @method appearance
 * @param {String} $appearance ָ��UA�������
 */
@mixin appearance($appearance: none) {
    @include prefix(appearance, $appearance);
}

/**
 * �����Ƿ����ѡ��Ԫ��
 * @method user-select
 * @param {String} $user-select ָ���Ƿ����ѡ��
 */
@mixin user-select($user-select: none) {
    @include prefix(user-select, $user-select);
}

/**
 * ���屳��ͼ�����ţ�Android Browser2.3.*����Ҫ����ǰ׺��
 * @method background-size
 * @param {String | Length} $background-size ָ������ͼ����ֵ
 */
@mixin background-size($background-size...) {
    @include prefix(background-size, $background-size);
}

/**
 * ���屳���ü���Android Browser2.3.*����Ҫ����ǰ׺��
 * @method background-clip
 * @param {String} $background-clip ָ������ͼ����ֵ
 */
@mixin background-clip($background-clip...) {
    @include prefix(background-clip, $background-clip);
}

/**
 * ���屳����ʾ����Android Browser2.3.*����Ҫ����ǰ׺��
 * @method background-origin
 * @param {String} $background-origin ָ������ͼ����ֵ
 */
@mixin background-origin($background-origin...) {
    @include prefix(background-origin, $background-origin);
}

/**
 * �����ģ��
 * @method box-sizing
 * @param {String} $box-sizing ��2��ֵ�ֱ�Ϊ��content-box(��׼��ģ��) | border-box(�����ģ��)
 */
@mixin box-sizing($box-sizing: border-box) {
    @include prefix(box-sizing, $box-sizing);
}

/**
 * ����Բ��
 * @method border-radius
 * @param {String} $border-radius ȡֵ��ԭ���﷨һ��
 */
@mixin border-radius($border-radius...) {
    border-radius: $border-radius;
    // �޸�ĳЩ��׿�����ϡ��߿�+��������������������
    // ֮���Ի���������Ϊ��Щ���͵ı����Ǵӱ߿򴦿�ʼ��Ⱦ������ֻ��Ҫ�ĳɴ�padding����Ⱦ����
    @include background-clip(padding-box !important);
}

/**
 * ����򵥱任
 * @method transform
 * @param {String} $transform ȡֵ��ԭ���﷨һ��
 */
@mixin transform($transform...) {
    @include prefix(transform, $transform);
}

/**
 * ����任ԭ��
 * @method transform-origin
 * @param {String} $transform-origin ȡֵ��ԭ���﷨һ��
 */
@mixin transform-origin($transform-origin) {
    @include prefix(transform-origin, $transform-origin);
}

/**
 * ���嶯��
 * @method animation
 * @param {String} $animation ȡֵ��ԭ���﷨һ��
 */
@mixin animation($animation...) {
    @include prefix(animation, $animation);
}

/**
 * ���岹��
 * @method transition
 * @param {String} $transition ȡֵ��ԭ���﷨һ��
 */
@mixin transition($transition...){
    $transitionable-prefixed-values: transform, transform-origin !default;
    $vendor-list: ();
    $list: ();

    @if map-get($setting, is-vendor-prefix) {
        @each $vendor in map-get($setting, vendor-prefix) {
            @for $i from 1 through length($transition) {
                @if type-of(nth($transition, $i)) == list {
                    @if index($transitionable-prefixed-values, nth(nth($transition, $i), 1)){
                        $vendor-list: join($vendor-list, #{$vendor}#{nth($transition, $i)}, $separator: comma);
                    } @else {
                        $vendor-list: join($vendor-list, #{nth($transition, $i)}, $separator: comma);
                    }
                }
            }
            #{$vendor}transition: $vendor-list;
            $vendor-list: ();
        }
    }

    @for $i from 1 through length($transition) {
        $list: join($list, #{nth($transition, $i)}, $separator: comma);
    }
    transition: $list;
}

/**
 * ������ʾ����Ϊ������
 * @method flexbox
 * @param {String} $flexbox Ĭ��ֵ��flex��ȡֵ������ԭ���﷨һ��
 */
@mixin flexbox($flexbox: flex) {
    @if $flexbox == flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    } @else {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: inline-flex;
    }
}

/**
 * ������������Ԫ����η���ռ�
 * @method flex
 * @param {String} $flex Ĭ��ֵ��1��ȡֵ������ԭ���﷨һ��
 * @param {String} $direction Ĭ��ֵ: row
 */
@mixin flex($flex: 1, $direction: row) {
    -webkit-box-flex: $flex;
    -webkit-flex: $flex;
    flex: $flex;
    // �޸�Android Browser4.3�����£�iOS Safari6.1�����°�����������������
    @if $direction == column {
        height: .1px;
    } @else {
        width: .1px;
    }
}

/**
 * ������������Ԫ�ص��Ű�˳��
 * @method order
 * @param {String} $order Ĭ��ֵ��1��ȡֵ������ԭ���﷨һ��
 */
@mixin order($order: 1) {
    -webkit-box-ordinal-group: $order;
    -webkit-order: $order;
    order: $order;
}

/**
 * ������������Ԫ�ص���������
 * @method flex-direction
 * @param {String} $flex-direction Ĭ��ֵ��row��ȡֵ������ԭ���﷨һ��
 */
@mixin flex-direction($flex-direction: row) {
    @if $flex-direction == row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
    } @else if $flex-direction == column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
    } @else if $flex-direction == row-reverse {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
    } @else if $flex-direction == column-reverse {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
    }
    -webkit-flex-direction: $flex-direction;
    flex-direction: $flex-direction;
}

/**
 * ������������Ԫ������Ű�
 * @method flex-wrap
 * @param {String} $flex-wrap Ĭ��ֵ��nowrap��ȡֵ������ԭ���﷨һ��
 */
@mixin flex-wrap($flex-wrap: nowrap) {
    @if $flex-wrap == nowrap {
        -webkit-box-lines: single;
    } @else {
        -webkit-box-lines: multiple;
    }
    -webkit-flex-wrap: $flex-wrap;
    flex-wrap: $flex-wrap;
}

/**
 * ������������Ԫ�ص�ˮƽ���뷽ʽ
 * @method justify-content
 * @param {String} $justify-content Ĭ��ֵ��center��ȡֵ������ԭ���﷨һ��
 */
@mixin justify-content($justify-content: center) {
    @if $justify-content == center {
        -webkit-box-pack: center;
    } @else if $justify-content == flex-start {
        -webkit-box-pack: start;
    } @else if $justify-content == flex-end {
        -webkit-box-pack: end;
    } @else if $justify-content == space-between {
        -webkit-box-pack: justify;
    }
    -webkit-justify-content: $justify-content;
    justify-content: $justify-content;
}

/**
 * ������������Ԫ�صĴ�ֱ���뷽ʽ
 * @method align-items
 * @param {String} $align-items Ĭ��ֵ��center��ȡֵ������ԭ���﷨һ��
 */
@mixin align-items($align-items: center) {
    @if $align-items == center {
        -webkit-box-align: center;
    } @else if $align-items == flex-start {
        -webkit-box-align: start;
    } @else if $align-items == flex-end {
        -webkit-box-align: end;
    } @else {
        -webkit-box-align: $align-items;
    }
    -webkit-align-items: $align-items;
    align-items: $align-items;
}

/**
 * ������������Ԫ������Ĵ�ֱ���뷽ʽ
 * @method align-self
 * @param {String} $align-self Ĭ��ֵ��center��ȡֵ������ԭ���﷨һ��
 */
@mixin align-self($align-self: center) {
    -webkit-align-self: $align-self;
    align-self: $align-self;
}

/**
 * ����root root-scroll
 * @method root-scroll
 * @param {String} $root-scroll ָ��scroll���ͣ�ȡֵoverflow���Եı�׼ֵ
 */
@mixin root-scroll($root-scroll: hidden) {
    html,
    body {
        overflow: $root-scroll;
        height: 100%;
    }
}

/**
 * �����Ƿ��й�����
 * @method overflow
 * @param {String} $overflow Ĭ��ֵ��auto��ȡֵ������ԭ���﷨һ��
 */
@mixin overflow($overflow: auto) {
    @if $overflow == auto {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    } @else {
        overflow: $overflow;
    }
}

/**
 * ���ɾ��η���
 * @method rect
 * @param {Length} $width ������εĳ���
 * @param {Length} $height ������εĸ߶�
 */
@mixin rect($width, $height) {
    width: $width;
    height: $height;
}

/**
 * ���������η���
 * @method square
 * @param {Length} $size ���������εı߳�
 */
@mixin square($size) {
    width: $size;
    height: $size;
}

/**
 * ����Բ�η���
 * @method circle
 * @param {Length} $size ����Բ�İ뾶����
 * @param {Length} $radius ����Բ��Բ�ǰ뾶����
 */
@mixin circle($size, $radius: 50%) {
    @include square($size);
    @include border-radius($radius);
}

/**
 * ����ȫ������
 * @method fullscreen
 * @param {Integer} $z-index ����������
 */
@mixin fullscreen($z-index: null) {
    position: absolute;
    z-index: $z-index;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

/**
 * �����������
 * @method clearfix
 */
@mixin clearfix() {
    &::after{
        display: block;
        overflow: hidden;
        clear: both;
        height: 0;
        content: "\0020";
    }
}

/**
 * ���Ӵ�����
 * @method link
 * @param {Color} $color ����������ɫ
 */
@mixin link($color: map-get($base, link-color)) {
    color: $color;
    cursor: pointer;
    &:active {
        opacity: .5;
    }
}

/**
 * ǿ�ƻ��з���
 * @method wrap
 */
@mixin wrap() {
    word-wrap: break-word;
    word-break: break-all;
}

/**
 * �����ı������ʾ����
 * @method ellipsis
 * @param {Boolen} $ellipsis �����Ƿ���Ҫʡ�Ժ�
 */
@mixin ellipsis($ellipsis: true) {
    overflow: hidden;
    white-space: nowrap;
    @if $ellipsis {
        text-overflow: ellipsis;
    }
}

/**
 * �������ط���
 * @method texthide
 */
@mixin texthide() {
    overflow: hidden;
    white-space: nowrap;
    text-indent: 100%;
}

/**
 * �����϶����-����
 * @method killspace
 */
@mixin killspace() {
    font-size: 0;
    font-family: arial;
}

/**
 * �����϶����-�Ӽ�
 * @method killspace-item
 */
@mixin killspace-item() {
    display: inline-block;
    font-size: map-get($base, font-size);
    font-family: map-get($base, font-family);
}

/**
 * δ֪�ߴ�Ԫ�ش�ֱ���н������-����
 * @method valign
 */
@mixin valign() {
    @include killspace();
    &::after{
        overflow: hidden;
        width: 0;
        height: 100%;
        content: "\0020";
        vertical-align: middle;
    }
}

/**
 * δ֪�ߴ�Ԫ�ش�ֱ���н������-�Ӽ�
 * @method valign-item
 */
@mixin valign-item() {
    @include killspace-item();
    vertical-align: middle;
}

/**
 * �Ѿ��ߴ�Ԫ�ش�ֱ���н������
 * @method alignment
 * @param {Length} $width ����Ԫ�صĿ��
 * @param {Length} $height ����Ԫ�صĸ߶�
 */
@mixin alignment($width: 2rem, $height: 2rem) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: $width;
    height: $height;
    margin-top: -$height/2;
    margin-left: -$width/2;
}

/* border */
@mixin border($border-width: 1px, $border-color: map-get($base, border-color), $border-style: solid, $radius: null) {
    // Ϊ�߿�λ���ṩ��λ�ο�
    position: relative;
    @if $border-width == null {
        $border-width: 0;
    }
    border-radius: $radius;
    &::after {
        // ���Խ���߿�layer�ڸ�����
        pointer-events: none;
        position: absolute;
        z-index: 999;
        top: 0;
        left: 0;
        content: "\0020";
        border-color: $border-color;
        border-style: $border-style;
        border-width: $border-width;
        @include box-sizing(border-box);
        // ����dpr��������
        @include responsive(retina1x) {
            width: 100%;
            height: 100%;
            @if $radius != null {
                border-radius: $radius;
            }
        }
        @include responsive(retina2x) {
            width: 200%;
            height: 200%;
            @include transform(scale(0.5));
            @if $radius != null {
                border-radius: $radius * 2;
            }
        }
        @include responsive(retina3x) {
            width: 300%;
            height: 300%;
            @include transform(scale(1/3));
            @if $radius != null {
                border-radius: $radius * 3;
            }
        }
        @include transform-origin(0 0);
    }
}