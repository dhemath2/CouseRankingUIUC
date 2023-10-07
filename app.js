document.addEventListener("DOMContentLoaded", function() {
    
    const db = firebase.firestore();

    // Reference to your courses in the database
    const coursesRef = db.collection('courses').orderBy('avgGPA', 'desc').limit(20);

    coursesRef.onSnapshot(function(querySnapshot) {
        const courseListElement = document.querySelector('.course-list');
        courseListElement.innerHTML = ''; // Clear previous course listings

        querySnapshot.forEach(function(doc) {
            const course = doc.data();

            const courseRow = document.createElement('tr');

            const courseNameTD = document.createElement('td');
            courseNameTD.innerText = course.courseName;

            const avgGPATD = document.createElement('td');
            avgGPATD.innerText = course.avgGPA.toFixed(2); 

            const avgLearnedTD = document.createElement('td');
            avgLearnedTD.innerText = course.avgLearned.toFixed(2);

            const avgEnjoymentTD = document.createElement('td');
            avgEnjoymentTD.innerText = course.avgEnjoyment.toFixed(2);

            const dataPointsTD = document.createElement('td');
            dataPointsTD.innerText = course.dataPoints;

            courseRow.appendChild(courseNameTD);
            courseRow.appendChild(avgGPATD);
            courseRow.appendChild(avgLearnedTD);
            courseRow.appendChild(avgEnjoymentTD);
            courseRow.appendChild(dataPointsTD);

            courseListElement.appendChild(courseRow);
        });
    });
});
