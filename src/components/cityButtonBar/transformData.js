import _ from 'lodash'
export default {
    cityData(ret){
        var citysGroup = [];
        var citys = {}
        var cityIds = []
        var citys1 = [];
        citys1.push({
            group: '*',
            value: '1',
            name: '全国',
            pinyin: 'QUANGUO'
        });
        var cityGroupObj = ret.data;
        for (var key in cityGroupObj) {
            var cur = cityGroupObj[key];
            _.each(cur, function (c, i) {
                citys1.push({
                    group: c.pinyin.substr(0, 1),
                    value: c.city_id,
                    name: c.name,
                    pinyin: c.pinyin
                });
            });
        }
        var groupObj = {};
        _.each(citys1, function (c, i) {
            var groupName = c.group;
            !groupObj[groupName] && (groupObj[groupName] = []);
            groupObj[groupName].push(c)
        });
        var groupNameArr = ["*", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var j = 0;
        _.each(groupNameArr, function (cur, i) {
            i % 4 === 0 && i > 0 && j++;
            citysGroup[j] = citysGroup[j] || {
                    ind: [],
                    citys: {}
                };
            citysGroup[j].ind.push(cur);
            groupObj[cur] && (citysGroup[j].citys[cur] = groupObj[cur]);
        });
        _.each(citysGroup, function (item,i) {
            for (key in item.citys) {
                var cCur = item.citys[key];
                _.each(cCur, function (item) {
                    citys[item.value] = item;
                    if (item.value !== '1') {
                        cityIds.push(item.value)
                    }
                });
            }
        });

        return [citysGroup,citys,cityIds]
    }
}