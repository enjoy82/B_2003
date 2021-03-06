# 入退室管理システム Face app

[![](http://img.youtube.com/vi/13LS5VLAYY8/0.jpg)](http://www.youtube.com/watch?v=13LS5VLAYY8 "demo")  
製品紹介動画



## 製品概要  
### 入退室管理 × Tech
### 背景(製品開発のきっかけ、課題等）
現在コロナ禍において、小さな団体でも入室管理を行わなければならない場面が続出しています。事実、私が所属しているサークルでは体育館を使用していますが、上限人数が設定されていたり、誰が参加したかを管理する必要が出ています。  
この入退室状況を把握する手段は、紙による人力での管理となっており、とてもめんどくさいです。  
そこで私たちはめんどうな機器導入せずとも簡単な会員登録のみで使用できる、顔認証によって入退室を管理するアプリを作成しようと思っています。
### 製品説明（具体的な製品の説明）

### 特長
#### 1. 顔認証によりスムーズに入退室を管理  
顔認証により、写真撮影のみで入退室を管理。いままでのめんどくさかった紙に必要事項などの手間が不要に。
#### 2. 紙ではなくデータで管理するため、管理の手間を省くことが可能  
データベース上にデータを管理。誰がいつ入退室を行ったかを高速で検索可能。また外部から現在その場所に誰がいるかを把握することも可能となっている。  
#### 3. ブラウザのみでシステムが完結、クラウドで構築しているため設備不要  
ブラウザ部分をheroku、バックエンドをawsにて構築。リソースをクラウドにて管理するため、システム運用の手間が少ない。またherokuはプッシュ、awsはterraformにて即構築可能。  
また規模が大きくなってしまった場合でもクラウドのリソースを増やすことでサービス拡大が可能。

### 解決出来ること  
* 特別な設備不要でブラウザのみで入退室を顔認証にて管理することができる。紙での管理のめんどくささ解消。  
* 外部から現在だれがいるか瞬時に把握することができる。向かう前に密を避けることが可能に。
### 今後の展望  
* UIの改善  
* 機能の追加(csvで入退室記録を出力するなど)  
* スマートフォン、タブレット対応  
* dockerを使用し、DBの設定を簡単に
### 注力したこと（こだわり等）
* ブラウザのみで、特別な環境構築をせずに使用できるようにする。  
* クラウドを使用し、リソースを手元で管理しないようにし、管理の手間を削減できるように。

## 開発技術  
#### サービス概要図  
![サービス構造](https://user-images.githubusercontent.com/60308978/98390342-901efd80-2098-11eb-90a5-021f8b7fb680.png)
### 活用した技術
#### API・データ
* api gateway
* lambda
* aws rekognition 

#### フレームワーク・ライブラリ・モジュール
##### フロントエンド
* react
* heroku

##### バックエンド
* AWS
* python
* MySQL


#### デバイス
* カメラ対応のPC


### 独自技術
#### ハッカソンで開発した独自機能・技術
* ブラウザで写真撮影、BASE64に変換してバックのapiに転送  
* herokuとawsを使用し、クラウドでのリソースの立ち上げ 
* aws rekognitionで提供されている顔認証apiを使用し、顔写真から入退室を管理するapiの作成。
* フロントとバックをapiにて通信確立  
  
### 発表スライドに関して  
G slideにて作成しています。  
[こちら](https://docs.google.com/presentation/d/1WxiNbQYpIj2pXey5inaxtHmTetlyc6rs2QAKa4Irk58/edit?usp=sharing)
  
## ディレクトリ構成に関して  
フロントエンドとバックエンド(awsで構築しているのでinfraとしています)でフォルダを分けて構築しています。  
