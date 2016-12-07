const messageData = [
  {
    index: 1,
    username: '马寅超',
    avatar: '../../static/avatar-1.png',
    content: '手握999k纯金笔都不如最后落笔那一刻的爽快，是时候该轮到我们上场了！',
    img: '../../static/pic-1.png',
    location: 'SAIC MOTOR Middle East FZE',
    time: '3分钟前',
    follows: ['潘绍之，', '毛菁雁，', 'Coco Mao，', 'Badboy，', '机灵小不懂，', '黄禕文'],
    // '徐晟宇，', '张雅琴'
    comments: [
      { user: '机灵小不懂', detail: '恭喜小马哥！阿联酋最大的经销商都被你们拿下了！' },
      { user: '蒋晨', detail: '干得漂亮!' },
    ],
  },
  {
    index: 2,
    username: '徐燕雯',
    avatar: '../../static/avatar-2.png',
    content: '圣地亚哥车展，Let’shine! 今年的主题是第3代无人驾驶概念和全新的售后服务体系。总有人说不容易不容易，可我听见梦想在说 Why not?',
    img: '../../static/pic-2.png',
    location: 'Santiago Chile Motor Show',
    time: '12分钟前',
    follows: ['Luf，', '马寅超，', '蒋晨，', 'Jacky，', '陈鸿，', 'April，', 'Eva，', '蒋小晨，', '赵晨栋'],
    comments: [
      { user: '林总', detail: '为梦想点赞👍👍👍' },
      { user: '陈鸿', detail: '规模一年比一年大了！' },
    ],
  },
  {
    index: 3,
    username: '毛天玲',
    avatar: '../../static/avatar-3.png',
    content: 'Travel around Australia from south to north to get the first hand data.' +
    'The annual market analysis is always the most exciting part in the marketing section.',
    img: '../../static/pic-3.png',
    location: 'Australia · Nelson Bay Rd · New South Wales',
    time: '3分钟前',
    follows: ['潘绍之，', '毛菁雁，', 'Joan，', '正直しんどい，', '钟卢英，', 'Henry，', '袁琳琳，', '高博'],
    // , '陈于斌，', 'David'
    comments: [
      { user: '路遥', replyTo: null, detail: '毛姐辛苦了，果然是全能市调王啊！' },
      { user: '毛天玲', replyTo: '路遥', detail: '谢谢，知己知彼才能百战百胜☺️' },
      {
        user: 'D-ONE', replyTo: null,
        detail: 'Compared with Chile, yours is just called ‘short haul’😜😜',
      },
      { user: '毛天玲', replyTo: 'D-ONE', detail: 'hahahaha, u got it😂' },
    ],
  },
  {
    index: 4,
    username: '陈鸿',
    avatar: '../../static/avatar-5.png',
    content: '每次和工程师们切磋都是一件艰苦并享受的事。But, 所有的努力和汗水在最后都要一种毫不费力的姿态呈现。是的，其实我就是想说，在南非大草原飙车的感觉实在是太酷了！',
    img: '../../static/pic-5.png',
    location: 'South Africa Kruger National Park',
    time: '3分钟前',
    follows: ['机灵小不懂，', '徐燕雯，', 'Luf，', '马寅超，', '蒋晨，', 'Jacky，', 'Coco Mao，', 'Badboy，', '黄禕'],
    // '张雅琴，', '江志平，', 'Joan' '徐晟宇'
    comments: [
      { user: '徐燕雯', replyTo: null, detail: '路测结果出来了？' },
      { user: '陈鸿', replyTo: '徐燕雯', detail: '是滴，比预想中顺利。' },
      { user: '林慧雯', replyTo: null, detail: '陈哥工作要不要这么拉风~！' },
      { user: '陈鸿', replyTo: '徐燕雯', detail: '是滴，比预想中顺利。' },
    ],
  },
  {
    index: 5,
    username: '彭去非',
    avatar: '../../static/avatar-4.png',
    content: '2017-2011入职整整5个年头。一路走来，收获比辛苦多，成长比付出多。最感恩收获一批志同道合的小伙伴，愿我们永葆初心，来日方长！',
    img: '../../static/pic-4.png',
    location: '上海',
    time: '1小时前',
    follows: ['机灵小不懂，', '徐燕雯，', 'Luf，', '马寅超，', '蒋晨，', 'Jacky，', '陈鸿，', 'April，', 'Eva'],
    // , '蒋小晨，', '赵晨栋，', '祝晶晶，', '毛果果'
    comments: [
      // { user: '徐燕雯', replyTo: null, detail: '你是明信片，我是冰箱贴' },
      { user: '彭去非', replyTo: '徐燕雯', detail: '我也有一整面冰箱贴' },
    ],
  },
  // '宋佳', '潘绍之', '毛菁雁', 'Coco Mao', 'Badboy', '黄禕', '徐晟宇', '张雅琴', '江志平', 'Joan', '正直しんどい',
  //     'David', 'Henry', '袁琳琳', '高博', '陈于斌'
  {
    index: 6,
    username: '张心露',
    avatar: '../../static/avatar-6.png',
    content: 'Today’s headline of NY times. Feel so proud to be a member of SAIC.',
    img: '../../static/pic-6.png',
    location: '中国 · 上海',
    time: '2小时前',
    follows: ['机灵小不懂，', '徐燕雯，', 'Luf，', '马寅超，', '蒋晨，', 'Jacky，', '祝晶晶，', '潘绍之'],
    comments: [],
  },
  // '毛菁雁', 'Coco Mao', 'Badboy', '张雅琴', '江志平', 'Joan', '正直しんどい'
];
export default messageData;
