pipeline {
  agent none
  stages {
    stage('Lint') {
      steps {
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps {
        parallel(
          "Tests": {
            sh 'ng test'
            
          },
          "Lint": {
            sh 'ng lint'
            
          }
        )
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