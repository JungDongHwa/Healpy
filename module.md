## node js -version 
 - v8.12.0

 ## npm -version
 - 6.4.1

 ## express --version
 - 4.16.0

 ## google cloud develope
 - 구글 파이어베이스에서 사진을 가져오기 위하여 필요한 sdk.
 - 구글에서 gcd를 다운받고 설치가 필요하다. 2018.10.21 현재 구글 클라우드에 접근을 용의하기 위하여 사용자 접근 권한을
 - allUsers로 바꾸었다. 이후 특정한 서버 컴퓨터의 접근만을 허용하기 위한 세팅이 필요.

 ######

 ## Android

 # 안드로이드 버전

 - 안드로이드 버전은 현재 성우 컴퓨터에서는 컴파일하고 실행을 하기 위한 버전으로 되어있음.
 - 각자의 컴퓨터에서 세팅이 다를 경우 버전을 달리하여 컴파일 및 실행이 필요함.
 - compileSdkVersion 27
 - defaultConfig {
        applicationId "org.kitsoft.healpy.myapplication"
        minSdkVersion 23
        targetSdkVersion 27
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
 -  implementation 'com.android.support:design:27.0.2'
    implementation 'com.android.support:animated-vector-drawable:27.0.2'
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation 'com.android.support:appcompat-v7:27.0.2'

 - 패키지 명을 com.example.samsung -> org.kitsoft.healpy 및 프로젝트 이름을 healpy로 변경.
