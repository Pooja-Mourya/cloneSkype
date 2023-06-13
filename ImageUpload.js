// import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import DocumentPicker from 'react-native-document-picker'
// // import axios from 'axios'

// const ImageUpload = () => {
//   let access_token =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjdiNzcyNmQ0NzYwNDMyMGZhZjM4NzUwYTRjNDgxYTk0MzE2ZTg5ZmE4NTEwYmE4ZjQ0MzE5N2Q3MDU3YjQxMzY1NThiYzUxYjNhNWZkMGEiLCJpYXQiOjE2ODA1OTExNDYuOTYwNTMwOTk2MzIyNjMxODM1OTM3NSwibmJmIjoxNjgwNTkxMTQ2Ljk2MDUzMjkwMzY3MTI2NDY0ODQzNzUsImV4cCI6MTcxMjIxMzU0Ni45NTg3MTcxMDc3NzI4MjcxNDg0Mzc1LCJzdWIiOiIxMDkiLCJzY29wZXMiOltdfQ.KTd81V3X1WSJ-66CZYaAefLJjeFryKGwqniNw5hAPLHa8VzGudYZQLrhQwSNA3f8BkSGWFhB-DXu9YND_CTTzl8lDctNYGaLKd7cAGhZ-8ObjomefvuT42m1mZ2YPy_bd2iW9R1njaTpVwxLOgbOL1kMblT7wV_oXtY6I9UKhEb6KOxuHYhbOl2OwJSAoYUc-UwNVw6v6uZQAd1ZAynJqZf6iIPi-CUc2oxd2L4i66G7RwQW37kVEq8pUsOyncJULc8Kq2Xa0i5A-evVrk-B3cDC3e-N1ZUniW2DNPwqPy8oe3hKeJw_U6hJH7RT0oS37GtCXtzAoWLptjVjYUcKbznNPrUGJuWebIApO_BWN9rOT99khXletYBYjOxc3FCV31yTiKO5QX7BL2R6TjcBZXaHi2ssK_tdEolyLaxPaqNo2-W81sKiQ4m2Tf4OeEpX1vFTKs891czXdtsSLSYnFB_SaeqpIf3pvSMnWxKgMNhZVHJMAOit2Zjjy7ExAGvFVora-HYEAIKVqzFcu5kHxV9W0bFwl-hlJbIq_7Uy5yI0lotqsya0la8PY-ZTI1CuWgtyEtPxyMDND_v8h8oRSQ-9yNaYWU-ktQFe-Sz-A8rD336xsfNLaV8Y8OHqeoJsfKD-xAWvdnfgxBPXrs5e1zBHXOs6mrUfAPPSL-IxhYs'
//   const APIServiceUploadFile = async (
//     endpoint,
//     singleFile,
//     token,
//     title,
//     type,
//     debugMsg,
//   ) => {
//     let formDataRes = new FormData()

//     if (type == 'multiple') {
//       // formDataRes.append('file_title', title);
//       formDataRes.append('is_multiple', 1)
//       singleFile.map((obj, index) => {
//         if (obj.uri != '') {
//           if (!obj.size) obj['size'] = obj.fileSize ?? obj.size
//           if (!obj.name)
//             obj['name'] = obj.fileName
//               ? obj.fileName
//               : obj.name
//               ? obj.name
//               : obj.uri.substr(obj.uri.lastIndexOf('/'), obj.uri.length)
//           // //console.log(obj);
//           formDataRes.append('file', obj)
//         }
//       })
//     } else {
//       // //console.log('file_title', title)
//       formDataRes.append('file_title', title)
//       if (singleFile.type !== 'application/pdf') {
//         if (!singleFile.size) singleFile['size'] = singleFile.fileSize
//         if (!singleFile.name) singleFile['name'] = singleFile.fileName
//       }
//       formDataRes.append('file', singleFile)
//     }

//     let debugMessage = debugMsg ?? ''

//     let url = 'https://meeting-api.gofactz.com/public/api/file-upload'
//     let headers = {}
//     if (token) {
//       headers = {
//         Authorization: 'Bearer ' + token,
//         Accept: '*/*',
//         'Content-Type': 'multipart/form-data;',
//       }
//     } else {
//       headers = {
//         Accept: '*/*',
//         'Content-Type': 'multipart/form-data;',
//       }
//     }

//     let configObject = {
//       headers: headers,
//     }

//     let response = {}

//     // console.log("data =-", url, JSON.stringify(formDataRes))
//     // console.log("configObject data =-", configObject)
//     // return
//     try {
//       response = await axios.post(url, formDataRes, configObject)

//       console.log(debugMessage + ' SuccessResponse', JSON.stringify(response))
//     } catch (error) {
//       console.log(debugMessage + ' FailureResponse...inside catch', error)

//       response['data'] = error?.response?.data

//       return response
//     }
//   }

//   const uploadFile = async (attachmentArr) => {
//     let res = await APIServiceUploadFile(
//       'file-upload',
//       attachmentArr,
//       access_token,
//       'upload_file_KPMG',
//       'multiple',
//       'KPMG Attachment',
//     )
//     if (!res?.errorMsg) {
//       Alert.alert('danger')
//       console.log(res.errorMsg)
//       return null
//     } else {
//       Alert.alert('success', 'message_uploaded_successfully')
//       return res?.data?.payload
//     }
//   }

//   const imageOrDocumentResponseHandler = async (response) => {
//     if (response.didCancel) {
//     } else if (response.error) {
//       Alert.alert('danger', 'message_something_went_wrong')
//     } else {
//       if (Array.isArray(response) && response.length > 0) {
//         let uploaded_doc_arr = await uploadFile(response)
//       } else if (response?.assets) {
//         let uploaded_doc_arr = await uploadFile(response?.assets)
//       }
//     }
//   }

//   const openImagePicker = async () => {
//     let chooseMultiple = true
//     let res = null
//     try {
//       if (chooseMultiple) {
//         res = await DocumentPicker.pickMultiple({
//           type: [
//             DocumentPicker.types.pdf,
//             DocumentPicker.types.doc,
//             DocumentPicker.types.docx,
//           ],
//         })
//       } else {
//         res = await DocumentPicker.pick({
//           type: [
//             DocumentPicker.types.pdf,
//             DocumentPicker.types.doc,
//             DocumentPicker.types.docx,
//           ],
//         })
//       }
//       // return res;
//     } catch (err) {
//       console.log('DocumentPicker Error', err)
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker, exit any dialogs or menus and move on
//       } else {
//         throw err
//       }
//     }
//     imageOrDocumentResponseHandler(res)
//   }

//   return (
//     <View>
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => {
//           openImagePicker()
//         }}
//       >
//         <Text style={{ color: '#fff', fontWeight: '700' }}>Upload</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default ImageUpload

// const styles = StyleSheet.create({
//   btn: {
//     marginTop: 7,
//     width: '70%',
//     minHeight: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 6,
//     backgroundColor: 'green',
//     paddingVertical: 5,
//     overflow: 'hidden',
//     // paddingHorizontal: 5
//   },
// })

// // how to upload image in react native?

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageUpload = () => {
  return (
    <View>
      <Text>ImageUpload</Text>
    </View>
  )
}

export default ImageUpload

const styles = StyleSheet.create({})
