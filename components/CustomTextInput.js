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

const CustomTextInput = ({
  updateInput,
  input,
  placeholder,
  isError,
  importedBorderColor,
  icon,
  max,
}) => {
  const [inputHeight, setInputHeight] = useState(0)
  const borderColor = isError ? 'red' : importedBorderColor || '#EFEFEF'
  const placeHolderText = placeholder || 'Input here'
  const borderStyle = { borderColor }
  const newStyle = {
    flex: 1,
    fontSize: 18,
    color: '#364247',
    textAlignVertical: 'top',
    height: Math.max(35, inputHeight),
    paddingTop: 0,
    alignSelf: 'center',
    marginLeft: icon ? 0 : 15,
  }
  const androidStyle = {
    paddingLeft: 0,
    marginTop: 17,
    marginBottom: 10,
  }

  const iosStyle = {
    marginTop: 20,
    marginBottom: 10,
  }

  return (
    <View style={[s.modal, borderStyle]}>
      {icon && (
        <TouchableOpacity style={s.circleBox}>
          <Text style={s.whiteText}>{icon}</Text>
        </TouchableOpacity>
      )}
      <TextInput
        style={Platform.select({
          ios: [newStyle, iosStyle],
          android: [newStyle, androidStyle],
        })}
        placeholder={placeHolderText}
        value={input}
        onChangeText={currentInput => updateInput(currentInput, false)}
        maxLength={max}
        multiline
        placeholderTextColor="#9B9B9B"
        onContentSizeChange={event => setInputHeight(event.nativeEvent.contentSize.height)}
      />
      {max && <Text style={s.counter}>{250 - input.length} </Text>}
    </View>
  )
}

export default CustomTextInput

const s = ReactNative.StyleSheet.create({
  modal: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  circleBox: {
    marginTop: 20,
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
  whiteText: {
    fontSize: 18,
    color: 'white',
  },
  counter: {
    justifyContent: 'center',
    marginTop: 23,
    width: 30,
    fontSize: 14,
    marginRight: 11,
    height: 20,
    color: '#9B9B9B',
    textAlign: 'center',
  },
})
