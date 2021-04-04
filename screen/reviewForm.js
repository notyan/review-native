import React, { useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { global } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-1-5','Rating Invalid', (val) =>{return parseInt(val)<6 && parseInt(val)>0 })
})

export default function ReviewForm({ addReview }){
    return(
        <View styles={global.container}>
            <Formik 
                initialValues={{ title: '', body: '', rating: ''}} 
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm();
                }}>

                {(props) => (
                    <View>
                        <TextInput style={global.input} placeholder="Review Title" onChangeText={props.handleChange('title')}   value={props.values.title}/>

                        <TextInput style={global.input} multiline placeholder="Review Body" onChangeText={props.handleChange('body')}  value={props.values.body}/>

                        <TextInput style={global.input} placeholder="1-5" onChangeText={props.handleChange('rating')}  value={props.values.rating} keyboardType='numeric'/>

                        <Button title="submit" color='#0f3057' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}