

var app1 = new Vue({
    el: '#app',
    data: {
        newItem: '',
        foods: []
    },
    methods: {
        addItem: function(event) {
            if(this.newItem == '') return;

            var food = {
               item: this.newItem
            };

            this.foods.push(food);
            this.newItem = '';

        },
        deleteItem: function(index){
            this.foods.splice(index, 1)

        }
    }
})


var app2 = new Vue({
  el: '#api',
  data: {
    arry: [
            ['チャーハン', '14-131', '卵', 'たまご', '玉ねぎ', 'たまねぎ'],
            ['キムチチャーハン', '14-131-1317', 'キムチ',　'たまご',　'卵'],
            ['レタスチャーハン', '14-131-1318', 'レタス',　'たまご',　'卵'],
            ['カルボナーラ', '15-138', 'パスタ',　'ベーコン',　'牛乳'],
            ['納豆パスタ', '15-684', '納豆', 'パスタ'],
            ['ペペロンチーノ', '15-681', 'パスタ', 'ニンニク', 'にんにく', 'オリーブオイル'],
            ['たらこパスタ・明太子パスタ', '15-683', 'パスタ', 'たらこ', '明太子'],
            ['トマト系パスタ', '15-680', 'パスタ', 'トマト'],
            ['ナポリタン', '15-676', 'パスタ', 'ケチャップ', '玉ねぎ', 'たまねぎ'],
            ['カレーうどん', '16-152-913', 'カレー', 'カレールー',　'うどん'],
            ['素麺・冷麦', 'そうめん', '素麺',　'めんつゆ',　'麺ゆつ'],
            ['あさり味噌汁', '17-159-1355', 'あさり', '味噌', 'ねぎ'],
            ['しじみ味噌汁', '', 'しじみ',　'味噌', 'ねぎ'],
            ['大根の味噌汁', '大根', '味噌'],
            ['豆腐の味噌汁', '豆腐', '絹豆腐', '木綿豆腐', '味噌'],
            ['ビビンバ', 'コチュジャン', 'もやし', 'にんじん', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['キーマカレー', 'トマト', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['ポテトサラダ', 'じゃがいも', 'マヨネーズ'],
            ['きんぴらごぼう', 'にんじん', 'ごぼう'],
            ['豆乳鍋', '23-397', '豆乳', '豆腐', '白菜'],
            ['キムチ鍋', '23-395', 'キムチ', '白菜', '豚バラ肉'],
            ['ピーマンの肉詰め', 'ピーマン', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['マーボー豆腐（麻婆豆腐）', '豆腐', '絹豆腐', '木綿豆腐', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['オムライス', '14-121', 'たまご', '卵', 'ケチャップ', '玉ねぎ', 'たまねぎ'], 
            ['チキンライス', '鶏モモ肉', '玉ねぎ', 'たまねぎ', 'ケチャップ'],
            ['エビピラフ', 'えび', '海老', 'たまねぎ', '玉ねぎ', 'バター'],
            ['豚丼',  '豚薄切り肉',　'たまねぎ',　'玉ねぎ'],
            ['中華丼',  'きくらげ',　'うずらたまご'],
            ['カツ丼', 'たまご', '卵', '豚ロース'],
            ['フレンチトースト', '22-433', '食パン', '牛乳']
          ],
    abc: [],
    ind: [],
    num: 0,
    recipes: [],
    show: true,
    show_after: false,
    show_show: false
  },
  methods: {
    fnc: function() {
        this.show = false
        this.show_after = true
        for(var a=0; a < this.arry.length; a++){
          this.num = 0
          for(var b=0; b < app1.foods.length; b++){
            var result = this.arry[a].indexOf(app1.foods[b].item)
            if(result !== -1){
              this.num += 1
            }
          }
          if(this.num >= 2){
            var rp = this.arry[a]
            // this.createRecipe(rp[1])
            this.abc.push(rp[0])
            this.ind.push(rp[1])
          }
        }
    },

    create: function(index) {
      this.show_after = false
      this.show_show = true
      var index_number = this.ind[index]
      this.createRecipe(index_number)
    },

  createRecipe: function(index){
    axios.get('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1081707383800108253&categoryId=' + index)
    .then(function(response){
<<<<<<< HEAD
      for(var x=0; x<4; x++){
      this.recipes.push({title: response.data.result[x].recipeTitle, images: response.data.result[x].foodImageUrl, url: response.data.result[x].recipeUrl})
    }
=======
      this.recipes.push({images: response.data.result[0].foodImageUrl})
      this.recipes.push({url: response.data.result[0].recipeUrl})
      this.recipes.push({title: response.data.result[0].recipeTitle})
      this.recipes.push({images: response.data.result[1].foodImageUrl})
      this.recipes.push({url: response.data.result[1].recipeUrl})
      this.recipes.push({title: response.data.result[1].recipeTitle})
      this.recipes.push({images: response.data.result[2].foodImageUrl})
      this.recipes.push({url:　response.data.result[2].recipeUrl})
      this.recipes.push({title: response.data.result[2].recipeTitle})
      this.recipes.push({images: response.data.result[3].foodImageUrl})
      this.recipes.push({url: response.data.result[3].recipeUrl})
      this.recipes.push({title: response.data.result[3].recipeTitle})
>>>>>>> origin/master
      // console.log(response)
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  }
}
})

<<<<<<< HEAD
=======


// var app3 = new Vue({
//     el: '#weather',
//     data: {
//       city: null,
//       temp: null,
//       condition: {
//       main: null
//       }
//     },
//     mounted: function(){
//       axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&appid=f3b18c03f19e675e32c44b6b0af50e64')
//       .then(function(response){
//         this.city = response.data.name
//         this.temp = response.data.main.temp
//         this.condition = response.data.weather[0]
//       }.bind(this))
//       .catch(function(error){
//         console.log(error)
//       })
//     },
//     filters: {
//       roundUp(value){
//         return Math.ceil(value)
//       }
//     }
// })
>>>>>>> origin/master
