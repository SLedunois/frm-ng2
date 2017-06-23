pipeline {
  agent none
  stages {
    stage('Lint') {
      steps {
        sh 'ng lint'
      }
    }
    stage('Tests') {
      steps {
        sh 'ng test'
      }
    }
    stage('E2e') {
      steps {
        sh 'ng e2e'
      }
    }
    stage('Build') {
      steps {
        sh 'ng build'
      }
    }
  }
}