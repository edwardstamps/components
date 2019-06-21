/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Copyright 2018 DoubleDutch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native'

const List = ({
  selectCell,
  list,
  primaryColor,
  selectedCell,
  includeFooter,
  fieldName,
  showRadio,
}) => {
  return (
    <FlatList
      style={s.listStyle}
      data={list}
      ListFooterComponent={<View style={includeFooter ? s.listFooter : null} />}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => selectCell(item)}
          style={item.isComplete ? s.listContainerGray : s.listContainer}
          disabled={item.isComplete}
        >
          {showRadio && (
            <View style={item.isComplete ? s.leftContainerGray : s.leftContainer}>
              <SurveyRadio selected={selectedCell.key === item.key} primaryColor={primaryColor} />
            </View>
          )}
          <View style={s.rightContainer}>
            <Text style={s.cellText}>{item[fieldName || 'name']}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const SurveyRadio = ({ selected, primaryColor }) => (
  <View style={[s.radio, selected ? { borderColor: primaryColor } : null]}>
    {selected ? <View style={[s.radioDot, { backgroundColor: primaryColor }]} /> : null}
  </View>
)

export default List

const s = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 2,
  },
  listStyle: {
    backgroundColor: '#EFEFEF',
    flex: 1,
  },
  listFooter: {
    height: 100,
  },
  cellText: {
    fontSize: 16,
    color: '#364247',
  },
  listContainerGray: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    marginBottom: 2,
    opacity: 0.5,
  },
  leftContainerGray: {
    flexDirection: 'column',
    paddingLeft: 10,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  leftContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    width: '80%',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#c4c4c4',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
})
