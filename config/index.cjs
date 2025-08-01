/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe01cc3552bc8b425',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8e37baf885b6f20f2cb3e3656e2f9a13',

  PROVINCE: '河北',
  CITY: '沧州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovqsQ64Jk2WiV0VgHAbue9LnEZbg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Vr6x3dw3H4wFcBCThTpXZAB0eT0Dwellvi3YbYdEPlc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-06-09' },
        { keyword: 'likai_day', date: '2025-07-29' },
        // 倒计日
        { keyword: 'birthday_message1', date: '2024-12-21' },
        { keyword: 'birthday_message2', date: '2024-08-29' },
      ],
    },

     {
      // 想要发送的人的名字
      name: '臭宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovqsQ68EZN0yOdBn9jClph20LxIQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Vr6x3dw3H4wFcBCThTpXZAB0eT0Dwellvi3YbYdEPlc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-06-09' },
        { keyword: 'likai_day', date: '2025-07-29' },
        // 倒计日
        { keyword: 'birthday_message1', date: '2024-12-21' },
        { keyword: 'birthday_message2', date: '2024-08-29' },
      ],
    },
  ],




  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'MwmnYeXYVmPBb3qVaB8W7-bOYNeX3BEj0tkFCddxyJ4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovqsQ68EZN0yOdBn9jClph20LxIQ',
    }
  ],


  
}

module.exports = USER_CONFIG

