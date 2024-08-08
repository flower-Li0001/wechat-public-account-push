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
      # 字体颜色:使用RGB颜色(如#000000黑色)，留空颜色默认随机
"color_date":                     "",          # 日期字体颜色
"color_region":                   "",          # 地区字体颜色
"color_weather":                  "",          # 天气字体颜色
"color_temp":                     "",          # 当前温度字体颜色
"color_wind":                     "",          # 当前风向字体颜色
"color_note_en":                  "",          # 金句英文字体颜色
"color_note_zh":                  "",          # 金句中文字体颜色
"color_max_temp":                 "",          # 最高温度字体颜色
"color_min_temp":                 "",          # 最低温度字体颜色
"color_sunrise":                  "",          # 日出字体颜色
"color_sunset":                   "",          # 日落字体颜色
"color_category":                 "",          # 空气质量字体颜色
"color_pm2p5":                    "",          # pm2.5字体颜色
"color_proposal":                 "",          # 今日建议字体颜色
"color_chp":                      "",          # 彩虹屁字体颜色
"color_birthday1":                "",          # 生日1字体颜色
"color_birthday2":                "",          # 生日2字体颜色
"color_commemoration_day1":       "",          # 纪念日1字体颜色
"color_commemoration_day2":       "",          # 纪念日2字体颜色
"color_yq":                       "",          # 疫情数据字体颜色

      // 想要发送的人的名字
      name: '小宝贝——1',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovqsQ67JaMnh2JLE1rEafWZl6GlE'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '24x3wdp_wmsmMoEeqm51z_F49rn9MBPcKy5LccCL4ro',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-17',
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
        // 结婚纪念日
       // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],

  

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'L1cm090tbRlQRE74rO7X7E9ZtrvwO4YOxRnPg2vYCMg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ovqsQ68EZN0yOdBn9jClph20LxIQ',
    }
  ],

}

module.exports = USER_CONFIG

