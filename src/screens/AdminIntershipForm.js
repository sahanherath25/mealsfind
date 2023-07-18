import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-picker';
// import AnimatedLoader from 'react-native-animated-loader';

const validationSchema = Yup.object().shape({
    company: Yup.string().required('Company is required'),
    skills: Yup.string().required('Skills are required'),
    location: Yup.string().required('Location is required'),
});

const AdminInternshipForm = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleImageUpload = () => {
        const options = {
            title: 'Select Image',
            mediaType: 'photo',
            maxWidth: 400,
            maxHeight: 400,
        };

        // ImagePicker.showImagePicker(options, (response) => {
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('Image picker error:', response.error);
        //     } else {
        //         setSelectedImage(response);
        //     }
        // });
    };

    const handleSubmit = (values) => {
        setIsLoading(true);
        // Simulating async operation
        setTimeout(() => {
            setIsLoading(false);
            console.log('Form values:', values);
            Alert.alert('Success', 'Internship details submitted successfully');
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Internship Details</Text>
            <Formik
                initialValues={{ company: '', skills: '', location: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Company"
                            onChangeText={handleChange('company')}
                            onBlur={handleBlur('company')}
                            value={values.company}
                        />
                        {touched.company && errors.company && (
                            <Text style={styles.errorText}>{errors.company}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Skills Needed"
                            onChangeText={handleChange('skills')}
                            onBlur={handleBlur('skills')}
                            value={values.skills}
                        />
                        {touched.skills && errors.skills && (
                            <Text style={styles.errorText}>{errors.skills}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Location"
                            onChangeText={handleChange('location')}
                            onBlur={handleBlur('location')}
                            value={values.location}
                        />
                        {touched.location && errors.location && (
                            <Text style={styles.errorText}>{errors.location}</Text>
                        )}

                        <TouchableOpacity
                            style={styles.imageUploadButton}
                            onPress={handleImageUpload}
                        >
                            <Text style={styles.imageUploadButtonText}>Upload Image</Text>
                        </TouchableOpacity>

                        {selectedImage && (
                            <View style={styles.imagePreviewContainer}>
                                <Image source={{ uri: selectedImage.uri }} style={styles.imagePreview} />
                            </View>
                        )}

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>

                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    imageUploadButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    imageUploadButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imagePreviewContainer: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePreview: {
        width: '100%',
        height: '100%',
    },
    submitButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loader: {
        width: 100,
        height: 100,
    },
});

export default AdminInternshipForm;
