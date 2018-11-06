package org.kitsoft.healpy.myapplication;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class ExerciseMenuActivity extends AppCompatActivity {

    Button exercise1Btn;
    Button exercise2Btn;
    Button exercise3Btn;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.exercise_main);

            exercise1Btn = (Button)findViewById(R.id.exercise1Btn);
            exercise2Btn = (Button)findViewById(R.id.exercise2Btn);
            exercise3Btn = (Button)findViewById(R.id.exercise3Btn);

            exercise1Btn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    try {
                        Intent intent = new Intent(ExerciseMenuActivity.this, CameraActivity.class);
                        startActivity(intent);
                    }
                    catch(NullPointerException ex) {
                        Toast.makeText(ExerciseMenuActivity.this, "NullPoint", Toast.LENGTH_SHORT).show();
                    }
                }
            });
//            exercise2Btn.setOnClickListener(new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                     Intent intent = new Intent(ExerciseMenuActivity.this, );
//                    intent.putExtra();
//                }
//            });
        }
}
