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

# 模板消息id
"template_id": "24x3wdp_wmsmMoEeqm51z_F49rn9MBPcKy5LccCL4ro",
# 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
"user": ["ovqsQ67JaMnh2JLE1rEafWZl6GlE","ovqsQ68EZN0yOdBn9jClph20LxIQ"],


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  # 信息配置
# 和风天气apikey
"weather_key": "",
# 天行数据apikey
"tian_api": "",
# 所在地区，可为省，城市，区，县，同时支持国外城市，例如伦敦
"region": "番禺区",
# 生日1，在日期前加r代表农历生日
"birthday1": {"name": "小宝", "birthday": "1997-01-01"},
# 生日2
"birthday2": {"name": "小林", "birthday": "r1997-01-01"},
# 纪念日1，会计算累计时间，格式"YYYY-MM-DD"
"commemoration_day1": "2021-01-01",
# 纪念日2，同上
"commemoration_day2": "2021-01-01",
# 金句中文，留空默认显示金山的每日金句
"note_ch": "",
# 金句英文
"note_en": "",
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
}

  
  

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

