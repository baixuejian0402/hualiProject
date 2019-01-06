SET NAMES UTF8;
DROP DATABASE IF EXISTS huali;
CREATE DATABASE huali CHARSET=UTF8;
USE huali;

/**1.用户信息列表**/
CREATE TABLE huali_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),       #头像图片路径
  user_name VARCHAR(16),
  gender BOOLEAN             #性别  0-女  1-男
);

/*用户信息*/
INSERT INTO huali_user VALUES
  (NULL, 'dingding', '123456', 'ding123@163.com', '13538352152', 'img/avatar/default.png', '丁伟', '1'),
  (NULL, 'tom', '234355', 'tom123@163.com', '13259003428', 'img/avatar/default.png', '唐慕', '1'),
  (NULL, 'jerry', '323455667', 'jerry456@163.com', '18710834178', 'img/avatar/default.png', '翟瑞', '1'),
  (NULL, 'yaya', '124362345', 'ya0402@163.com', '15991673540', 'img/avatar/default.png', '秦小雅', '0');

/**2.首页轮播广告商品表**/
CREATE TABLE huali_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR(128),
  title VARCHAR(64)
);

/**首页轮播广告商品表**/
INSERT INTO huali_index_carousel VALUES
(NULL,'image/1.jpg','浪漫生日礼'),
(NULL,'image/1.jpg','睿智摩羯座'),
(NULL,'image/1.jpg','设计师臻选'),
(NULL,'image/1.jpg','圣诞之夜'),
(NULL,'image/1.jpg','鲜花礼品行业龙头奖');

/**3.商品导购表**/
CREATE TABLE huali_pro_shopping_guide(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64)
);

/**商品导购**/
INSERT INTO huali_pro_shopping_guide VALUES
  (NULL,'鲜花用途'),
  (NULL,'鲜花材料'),
  (NULL,'鲜花类别'),
  (NULL,'永生花'),
  (NULL,'礼品'),
  (NULL,'公仔'),
  (NULL,'绿植');

/**4.商品导购分类关联表**/
CREATE TABLE huali_pro_classify(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  guide_id INT
);

/**商品导购分类关联**/
INSERT INTO huali_pro_classify VALUES
  (NULL,'爱情鲜花','',1),
  (NULL,'生日鲜花','',1),
  (NULL,'友情鲜花','',1),
  (NULL,'问候长辈','',1),
  (NULL,'探病慰问','',1),
  (NULL,'道歉鲜花','',1),
  (NULL,'祝贺鲜花','',1),
  (NULL,'婚庆鲜花','',1),
  (NULL,'商务鲜花','',1),
  (NULL,'玫瑰','',2),
  (NULL,'康乃馨','',2),
  (NULL,'郁金香','',2),
  (NULL,'百合','',2),
  (NULL,'扶郎','',2),
  (NULL,'马蹄莲','',2),
  (NULL,'向日葵','',2),
  (NULL,'花束','',3),
  (NULL,'花盒','',3),
  (NULL,'瓶花','',3),
  (NULL,'精品鲜花','',3),
  (NULL,'果篮','',3),
  (NULL,'桌面花篮','',3),
  (NULL,'开业花篮','',3),
  (Null,'经典花盒','',4),
  (Null,'巨型玫瑰','',4),
  (Null,'薰衣草','',4),
  (Null,'保鲜花','',5),
  (Null,'金箔花','',5),
  (Null,'音乐盒','',5),
  (Null,'水晶内雕','',5),
  (Null,'化妆镜','',5),
  (Null,'音乐睡枕','',5),
  (Null,'香薰系列','',5),
  (Null,'花瓶/相框','',5),
  (Null,'首饰','',5),
  (Null,'创意礼盒','',5),
  (Null,'Hello Kitty公仔','',6),
  (Null,'doge神烦狗','',6),
  (Null,'卡通花束','',6),
  (Null,'绿色植物','',7),
  (Null,'盆栽花卉','',7);

/**5.首页商品栏目表**/
CREATE TABLE huali_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(64),
  price DECIMAL(10,2),
  href VARCHAR(128)
);

/**6.鲜花表--记载所有商品的信息**/
CREATE TABLE huali_flower(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),            #主标题
  subtitle VARCHAR(128),         #副标题

  family_id INT,                 #鲜花种类编号
  materials VARCHAR(64),         #材料
  package VARCHAR(32),           #包装
  flower_language VARCHAR(128),  #花语
  dispatching VARCHAR(32),       #配送
  spec VARCHAR(64),              #规格/颜色
  price DECIMAL(10,2),           #价格

  shelf_time BIGINT,             #上架时间
  sold_count INT,                #已售出的数量
  is_onsale BOOLEAN              #是否促销中
);

/**7.鲜花详情图表--记载商品的缩放图中的素材路径**/
CREATE TABLE huali_flower_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  flower_id INT,              #鲜花编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**8.购物车表 **/
CREATE TABLE huali_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,        #用户编号
  product_id INT,     #商品编号
  buy_count INT,      #购买数量
  is_checked BOOLEAN   #是否已勾选，确定购买
);

/**9.订单表**/
CREATE TABLE huali_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  buy_count INT           #购买数量
);

/**10.导航条目**/
CREATE TABLE huali_navbar(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  title VARCHAR(32)
);



