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

/**2.首页轮播广告商品表**/
CREATE TABLE huali_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  src VARCHAR(128),
  title VARCHAR(64)
);

/**3.商品导购表**/
CREATE TABLE huali_pro_shopping_guide(
  gid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64)
);

/**4.商品导购分类关联表**/
CREATE TABLE huali_pro_classify(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  gid INT
);

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

  gid INT,                       #鲜花分类编号
  materials VARCHAR(64),         #材料
  package VARCHAR(32),           #包装
  flower_language VARCHAR(128),  #花语
  attached VARCHAR(32),           #附送
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
  fid INT,                    #鲜花编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**8.购物车表 **/
CREATE TABLE huali_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,            #用户编号
  pid INT,            #商品编号
  count INT      #购买数量
);

/**9.订单表**/
CREATE TABLE huali_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,            #商品编号
  count INT       #购买数量
);

/**10.导航条目**/
CREATE TABLE huali_navbar(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(32),
  title VARCHAR(32)
);

/*1.用户信息*/
INSERT INTO huali_user VALUES
  (NULL, 'dingding', '123456', 'ding123@163.com', '13538352152', 'img/avatar/default.png', '丁伟', '1'),
  (NULL, 'tom', '234355', 'tom123@163.com', '13259003428', 'img/avatar/default.png', '唐慕', '1'),
  (NULL, 'jerry', '323455667', 'jerry456@163.com', '18710834178', 'img/avatar/default.png', '翟瑞', '1'),
  (NULL, 'yaya', '124362345', 'ya0402@163.com', '15991673540', 'img/avatar/default.png', '秦小雅', '0');

/**2.首页轮播广告商品表**/
INSERT INTO huali_index_carousel VALUES
(NULL,'img/banners/19_valentine_pc.jpg','2.14 情人节'),
(NULL,'img/banners/18_birthday_pc.jpg','浪漫生日礼'),
(NULL,'img/banners/17_mjz_pc.jpg','睿智魔蝎座'),
(NULL,'img/banners/17_spz_pc.jpg','独特水瓶座'),
(NULL,'img/banners/18_youflower_pc.jpg','设计师臻选');

/**3.商品导购**/
INSERT INTO huali_pro_shopping_guide VALUES
  (NULL,'鲜花用途'),
  (NULL,'鲜花材料'),
  (NULL,'鲜花类别'),
  (NULL,'永生花'),
  (NULL,'礼品'),
  (NULL,'公仔'),
  (NULL,'绿植');

/**4.商品导购分类关联**/
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
INSERT INTO huali_index_product VALUES
(NULL,'img/index/love-1.jpg','鲜花 · 忘情巴黎',298,'product_details.html?fid=1'),
(NULL,'img/index/love-2.jpg','鲜花 · 真爱如初',206,'product_details.html?fid=1'),
(NULL,'img/index/love-3.jpg','鲜花 · 恋恋情深',199,'product_details.html?fid=1'),
(NULL,'img/index/love-4.jpg','鲜花 · 一往情深',245,'product_details.html?fid=1'),
(NULL,'img/index/love-5.jpg','鲜花 · 你的香气',128,'product_details.html?fid=1'),
(NULL,'img/index/love-6.jpg','鲜花 · 不变的承诺',520,'product_details.html?fid=1'),
(NULL,'img/index/love-7.jpg','鲜花 · 爱的小确幸',309,'product_details.html?fid=1'),
(NULL,'img/index/love-8.jpg','鲜花 · 不变的心',459,'product_details.html?fid=1'),

(NULL,'img/index/elder-1.jpg','鲜花 · 圆满',286,'product_details.html?fid=2'),
(NULL,'img/index/elder-2.jpg','鲜花 · 留住好时光',239,'product_details.html?fid=2'),
(NULL,'img/index/elder-3.jpg','鲜花 · 恩情无限',178,'product_details.html?fid=2'),
(NULL,'img/index/elder-4.jpg','鲜花 · 母爱',178,'product_details.html?fid=2'),
(NULL,'img/index/elder-5.jpg','鲜花 · 感激',218,'product_details.html?fid=2'),
(NULL,'img/index/elder-6.jpg','鲜花 · 温情祝福',195,'product_details.html?fid=2'),
(NULL,'img/index/elder-7.jpg','鲜花 · 馨情无限',246,'product_details.html?fid=2'),
(NULL,'img/index/elder-8.jpg','鲜花 · 一缕清香',198,'product_details.html?fid=2'),

(NULL,'img/index/song-1.jpg','永生花 · 「泰迪珍藏」泰迪熊永生花公仔/红',298,'product_details.html?fid=3'),
(NULL,'img/index/song-2.jpg','永生花 · 恋心',288,'product_details.html?fid=3'),
(NULL,'img/index/song-3.jpg','永生花 · 彩虹下的约定/花的嫁纱银项链',368,'product_details.html?fid=3'),
(NULL,'img/index/song-4.jpg','永生花 · 花漾蜜恋·淡雅紫',298,'product_details.html?fid=3'),
(NULL,'img/index/song-5.jpg','永生花 · 一生一世',198,'product_details.html?fid=3'),
(NULL,'img/index/song-6.jpg','永生花 · 柔情时光－口红款',588,'product_details.html?fid=3'),
(NULL,'img/index/song-7.jpg','永生花 · 海洋之恋',999,'product_details.html?fid=3'),
(NULL,'img/index/song-8.jpg','永生花 · 温柔清浅',368,'product_details.html?fid=3'),

(NULL,'img/index/gift-1.jpg','礼品 · 999纯金箔玫瑰+陶瓷花瓶',138,'product_details.html?fid=4'),
(NULL,'img/index/gift-2.jpg','礼品 · 宝石旋转木马/蓝',158,'product_details.html?fid=4'),
(NULL,'img/index/gift-3.jpg','礼品 · 心形3D水晶内雕爱在心里',169,'product_details.html?fid=4'),
(NULL,'img/index/gift-4.jpg','礼品 · 十八音粉水晶钢琴',258,'product_details.html?fid=4'),
(NULL,'img/index/gift-5.jpg','礼品 · 一路上有你',338,'product_details.html?fid=4'),
(NULL,'img/index/gift-6.jpg','礼品 · 斜口瓶花',489,'product_details.html?fid=4'),
(NULL,'img/index/gift-7.jpg','礼品 · Hello Kitty转运水晶化妆镜',128,'product_details.html?fid=4'),
(NULL,'img/index/gift-8.jpg','礼品 · 玫瑰花园/淡雅',786,'product_details.html?fid=4');

/**6.鲜花表--记载所有商品的信息**/
/*
CREATE TABLE huali_flower(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),            #主标题
  subtitle VARCHAR(128),         #副标题

  gid INT,                       #鲜花分类编号
  materials VARCHAR(64),         #材料
  package VARCHAR(32),           #包装
  flower_language VARCHAR(128),  #花语
  attached VARCHAR(32),           #附送
  dispatching VARCHAR(32),       #配送
  spec VARCHAR(64),              #规格/颜色
  price DECIMAL(10,2),           #价格

  shelf_time BIGINT,             #上架时间
  sold_count INT,                #已售出的数量
  is_onsale BOOLEAN              #是否促销中
);
*/
INSERT INTO huali_flower VALUES
(NULL,'忘情巴黎--33枝红玫瑰','浪漫唯美 女神挚爱','9012009','33枝红玫瑰，石竹梅围绕','黑色条纹纸，红色缎带花结','只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','忘情巴黎',298,150223456789,245,true),
(NULL,'真爱如初--雪山玫瑰11枝、深紫色勿忘我0.3扎','高档礼盒 纯洁高贵','9010947','高档礼盒装鲜花:雪山玫瑰11枝、深紫色勿忘我0.3扎','素染纸-浅灰2张，雪梨纸0.5张，银灰色logo缎带1米，魔力铁山灰盒(小)','用一袭白裙装扮你那无瑕的身姿，向一抹白云倾诉对你的思念，用一捧鲜花证明我不变的心。','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','真爱如初',206,150223456789,245,true),
(NULL,'恋恋情深--11枝香槟玫瑰，白百合2枝','经典款式 简约设计','9012243','11枝香槟玫瑰，白百合2枝，栀子叶0.5扎','深浅绿双面人造纸2张，米白色缎带1.5米','喜欢像是一阵风，而爱你是细水长流','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','真爱如初',199,150223456789,245,true),
(NULL,'一往情深--精品玫瑰礼盒:19枝红玫瑰，勿忘我适量','经典爆款，年销售冠军！','9010966','高档礼盒装鲜花:19枝红玫瑰，勿忘我适量','牛皮纸和深咖啡色条纹纸，银色缎带花结，魔力铁山灰包装盒','你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','一往情深',245,150223456789,245,true),
(NULL,'你的香气--戴安娜粉玫瑰9枝','','9012078','黛安娜玫瑰9枝，浅紫色勿忘我适量，栀子叶适量','白色雪梨纸，浅紫／香芋紫人造纸，豆沙色缎带花结','花开的季节，我迷恋你的香气，那是我思念的味道！','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','真爱如初',128,150223456789,245,true),
(NULL,'不变的承诺--99枝红玫瑰','经典99枝，鼎力推荐！','9012177','99枝红玫瑰','黑色雪梨纸，黑色条纹纸，玻璃纸卷，酒红色缎带花结','下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','真爱如初',520,150223456789,245,true),
(NULL,'爱的小确幸--戴安娜粉玫瑰21枝，粉色桔梗5枝，石竹梅7枝','玫瑰平铺设计','9012167','戴安娜粉玫瑰21枝，粉色桔梗5枝，石竹梅7枝','57#魔力铁山灰包装盒','一个人有一种幸福，爱是最简单的音符，啦啦啦~微小确定的幸福！','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','爱的小确幸',309,150223456789,245,true),
(NULL,'不变的心--戴安娜玫瑰66枝','','9012055','戴安娜玫瑰66枝 勿忘我适量围绕','内层粉色厚棉纸 外层银灰色短平板印花树叶草 粉紫双色缎带','爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲。没有你，我就像一只迷失了方向的船。','下单填写留言，即免费赠送精美贺卡！','全国 （可配送至全国2000多城市，市区免配送费）','真爱如初',459,150223456789,245,true);