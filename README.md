# Handwritten Digit Recognition

This project shows a simple integration of a neural network built and trained using TensorFlow and Python in an Angular application.
This application recognizes numbers written on the webpage canvas using Convolutional Neural Networks and MNIST dataset. So it first imports the MNIST ConvNet trained in Keras, then makes predictions using TensorFlow.js.

To test this application locally:
`npm install`
`ng serve`
`cd python/trained_model`
`http-server -p 3000 --cors` to load the pretrained Keras model

![alt text](/images/ScreenRec.gif "Handwritten Digit Recognition")
