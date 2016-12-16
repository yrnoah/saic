const messageData = [
  {
    index: 1,
    username: 'Allen',
    avatar: '../../static/avatar-1.png',
    content: '手握999k纯金笔都不如最后落笔那一刻的爽快，是时候该轮到我们上场了！',
    img: '../../static/pic-1.png',
    location: 'SAIC MOTOR Middle East FZE',
    time: '3分钟前',
    follows: ['潘绍之，', '毛菁雁，', 'Lily Mao，', 'Badboy，', '机灵小不懂，'],
    // '徐晟宇，', '张雅琴'
    comments: [
      { user: '机灵小不懂', detail: '恭喜！阿联酋最大的经销商都被你们拿下了！' },
      { user: '蒋晨', detail: '干得漂亮👏' },
    ],
  },
  {
    index: 2,
    username: 'Yan',
    avatar: '../../static/avatar-2.png',
    content: '圣地亚哥车展，Let’shine! 今年的主题是第3代无人驾驶概念和全新的售后服务体系。总有人说不容易不容易，可我听见梦想在说 Why not?',
    img: '../../static/pic-2.png',
    location: 'Santiago Chile Motor Show',
    time: '12分钟前',
    follows: ['Luf，', '马寅超，', '蒋晨，', 'Jacky，', '陈鸿，', 'April，', 'Eva'], // '蒋小晨，', '赵晨栋'
    comments: [
      { user: 'Jacky', detail: '为梦想点赞👍👍👍' },
      { user: 'Roy', detail: '规模一年比一年大了！' },
    ],
  },
  {
    index: 3,
    username: 'Henry',
    avatar: '../../static/avatar-3.png',
    content: 'Travel around Australia from south to north to get the first hand data.' +
    'The annual market analysis is always the most exciting part in the marketing section.',
    img: '../../static/pic-3.png',
    location: 'Australia · Nelson Bay Rd · New South Wales',
    time: '3分钟前',
    follows: ['潘绍之，', '毛菁雁，', 'Joan，', '正直しんどい，', '钟卢英，', 'Henry，', '高博'],
    // , '陈于斌，', 'David' '袁琳琳，'
    comments: [
      { user: '路遥', replyTo: null, detail: 'henry辛苦了，果然是全能市调王啊！' },
      {
        user: 'D-ONE', replyTo: null,
        detail: 'Compared with Chile, yours is just called ‘short haul’😜😜',
      },
    ],
  },
  {
    index: 4,
    username: 'Roy',
    avatar: '../../static/avatar-5.png',
    content: '每次和工程师们切磋都是一件艰苦并享受的事。But, 所有的努力和汗水在最后都要一种毫不费力的姿态呈现。是的，其实我就是想说，在南非大草原飙车的感觉实在是太酷了！',
    img: '../../static/pic-5.png',
    location: 'South Africa Kruger National Park',
    time: '3分钟前',
    follows: ['徐晟宇，', '徐燕雯，', 'Luf，', '马寅超，', 'Lily Mao，', 'Badboy，', '黄禕'],
    // '张雅琴，', '江志平，', 'Joan' '徐晟宇' '蒋晨，', 'Jacky，',
    comments: [
      { user: '徐燕雯', replyTo: null, detail: '路测结果出来了？' },
      { user: 'Roy', replyTo: '徐燕雯', detail: '是滴，比预想中顺利。' },
      { user: '林慧雯', replyTo: null, detail: '工作要不要这么拉风~！' },
    ],
  },
  {
    index: 5,
    username: 'Fei',
    avatar: '../../static/avatar-4.png',
    content: '2017-2022入职整整5个年头。一路走来，收获比辛苦多，成长比付出多。最感恩收获一批志同道合的小伙伴，愿我们永葆初心，来日方长！',
    img: '../../static/pic-4.png',
    location: '上海',
    time: '1小时前',
    follows: ['机灵小不懂，', '徐燕雯，', 'Luf，', '徐晟宇，', '蒋晨，', 'Jacky，', '陈鸿'],
    // , '蒋小晨，', '赵晨栋，', '祝晶晶，', '毛果果' , 'April，', 'Eva'
    comments: [
      // { user: '徐燕雯', replyTo: null, detail: '你是明信片，我是冰箱贴' },
      { user: '彭去非', replyTo: null, detail: '你的是明信片，我的是冰箱贴' },
    ],
  },
  // '宋佳', '潘绍之', '毛菁雁', 'Lily Mao', 'Badboy', '黄禕', '徐晟宇', '张雅琴', '江志平', 'Joan', '正直しんどい',
  //     'David', 'Henry', '袁琳琳', '高博', '陈于斌'
  {
    index: 6,
    username: 'Summer',
    avatar: '../../static/avatar-6.png',
    content: 'Today’s headline of NY times. Feel so proud to be a member of SAIC.',
    img: '../../static/pic-6.png',
    location: '中国 · 上海',
    time: '2小时前',
    follows: ['机灵小不懂，', '徐燕雯，', 'Luf，', '祝晶晶，', '潘绍之'],
    comments: [],
  },
  // '毛菁雁', 'Lily Mao', 'Badboy', '张雅琴', '江志平', 'Joan', '正直しんどい' '马寅超，', '蒋晨，', 'Jacky，',
];
export default messageData;
