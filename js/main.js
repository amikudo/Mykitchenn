

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
            ['素麺・冷麦', '16-154-151', 'そうめん', 'そうめん', '素麺',　'めんつゆ',　'麺ゆつ'],
            ['あさり味噌汁', '17-159-1355', 'あさり', 'あさり', '味噌', 'ねぎ'],
            ['しじみ味噌汁', '17-159-1356', 'しじみ', 'しじみ' ,　'味噌', 'ねぎ'],
            ['大根の味噌汁', '17-159-2151', '大根', '大根', '味噌'],
            ['豆腐の味噌汁', '17-159', '豆腐', '絹豆腐', '木綿豆腐', '豆腐', '絹豆腐', '木綿豆腐', '味噌', 'ねぎ'],
            ['ビビンバ', '42-552', 'コチュジャン', 'もやし', 'にんじん', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['キーマカレー', '30-307-1158', 'トマト', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['ポテトサラダ', '18-415', 'じゃがいも', 'マヨネーズ', '玉ねぎ'],
            ['きんぴらごぼう', '30-311-1192', 'にんじん', 'ごぼう'],
            ['豆乳鍋', '23-397', '豆乳', '豆腐', '白菜'],
            ['キムチ鍋', '23-395', 'キムチ', '白菜', '豚バラ肉'],
            ['ピーマンの肉詰め', '31-321', 'ピーマン', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['マーボー豆腐（麻婆豆腐）', '41-534', '豆腐', '絹豆腐', '木綿豆腐', 'ひき肉', '牛挽肉', '豚挽肉', '合挽肉'],
            ['オムライス', '14-121', 'たまご', '卵', 'ケチャップ', '玉ねぎ', 'たまねぎ'], 
            ['チキンライス', '14-122', '鶏モモ肉', '玉ねぎ', 'たまねぎ', 'ケチャップ'],
            ['エビピラフ', '14-127', 'えび', '海老', 'たまねぎ', '玉ねぎ', 'バター'],
            ['豚丼', '14-130-544',  '豚薄切り肉',　'たまねぎ',　'玉ねぎ'],
            ['中華丼', '14-130-546', '豚肉', '豚バラ', '豚薄切り肉', '白菜', 'うずらたまご'],
            ['カツ丼', '14-130-542', 'たまご', '卵', '豚ロース', '豚ロース肉', '豚ヒレ肉'],
            ['フレンチトースト', '22-433', '食パン', '牛乳'],
            ['からあげ', '30-309-1173', '鶏肉', 'とり肉', '鶏もも肉', '鶏むね肉', '鶏モモ肉', '鶏ムネ肉', '鶏胸肉', '鶏肉', 'とり肉', '鶏もも肉', '鶏むね肉', '鶏モモ肉', '鶏ムネ肉', '鶏胸肉']
            ['きゅうりの和え物', '12-450', 'きゅうり', 'キュウリ', '胡瓜', 'きゅうり', 'キュウリ', '胡瓜']
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
      for(var x=0; x<4; x++){
      this.recipes.push({title: response.data.result[x].recipeTitle, images: response.data.result[x].foodImageUrl, url: response.data.result[x].recipeUrl})
    }
      // console.log(response)
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  }
}
})

