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

import React, { useState } from 'react'
import ReactNative, { Text, View, TouchableOpacity, TextInput, Platform } from 'react-native'

const Search = ({ showHeader, showSearch, updateList, header }) => {
  const [search, setSearch] = useState('')
  const localHeader = header || 'Select'
  const newStyle = {
    flex: 1,
    fontSize: 18,
    color: '#364247',
    textAlignVertical: 'top',
    maxHeight: 100,
    height: Math.max(35, 0),
    paddingTop: 0,
  }
  const androidStyle = {
    paddingLeft: 0,
    marginTop: 5,
  }
  const iosStyle = {
    marginTop: 4,
    marginBottom: 10,
  }
  if (showSearch) {
    return (
      <View style={s.headerContainer}>
        {showHeader && <Text style={s.modHeader}>{localHeader}</Text>}
        <View style={s.outerBox}>
          <View style={s.innerBox}>
            {search ? (
              <View style={s.space} />
            ) : (
              <TouchableOpacity style={s.circleBoxMargin}>
                <Text style={s.whiteText}>?</Text>
              </TouchableOpacity>
            )}
            <TextInput
              style={Platform.select({
                ios: [newStyle, iosStyle],
                android: [newStyle, androidStyle],
              })}
              placeholder="Search"
              value={search}
              onChangeText={input => {
                setSearch(input)
                updateList(input)
              }}
              maxLength={25}
              placeholderTextColor="#9B9B9B"
            />
            {search ? (
              <TouchableOpacity style={s.circleBoxMargin} onPress={() => setSearch('')}>
                <Text style={s.whiteText}>X</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={s.headerContainer}>
        <Text style={s.modHeader}>{header}</Text>
      </View>
    </View>
  )
}

export default Search

const s = ReactNative.StyleSheet.create({
  headerContainer: {
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
  },
  modHeader: {
    backgroundColor: 'white',
    height: 51,
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 15,
    color: '#364247',
  },
  circleBoxMargin: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#9B9B9B',
    paddingLeft: 8,
    paddingRight: 8,
    height: 22,
    borderRadius: 50,
  },
  outerBox: {
    backgroundColor: '#9B9B9B',
    padding: 10,
  },
  whiteText: {
    fontSize: 18,
    color: 'white',
  },
  space: {
    width: 40,
  },
  innerBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#b7b7b7',
    borderBottomWidth: 1,
    borderRadius: 5,
    height: 40,
  },
})
