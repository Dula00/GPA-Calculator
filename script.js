function addSubject() {
    const table = document.getElementById("subjectTable");

    const row = table.insertRow();
    const subCell = row.insertCell(0);
    const gradeCell = row.insertCell(1);
    const creditCell = row.insertCell(2);

    subCell.innerHTML = `<input type="text" placeholder="Subject Name">`;

    gradeCell.innerHTML = `
        <select>
            <option value="">Select</option>
            <option value="4">A+</option>
            <option value="4">A</option>
            <option value="3.7">A-</option>
            <option value="3.3">B+</option>
            <option value="3">B</option>
            <option value="2.7">B-</option>
            <option value="2.3">C+</option>
            <option value="2">C</option>
            <option value="1.7">C-</option>
            <option value="1.3">D+</option>
            <option value="1">D</option>
            <option value="0">E</option>
        </select>
    `;

    creditCell.innerHTML = `
        <input type="number" min="1" placeholder="Credit">
    `;
}

function calculateGPA() {
    const table = document.getElementById("subjectTable");

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 1; i < table.rows.length; i++) {
        const grade = table.rows[i].cells[1].querySelector("select").value;
        const credit = table.rows[i].cells[2].querySelector("input").value;

        if (grade === "" || credit === "") {
            alert("Please fill grade and credit for all subjects");
            return;
        }

        totalPoints += parseFloat(grade) * parseFloat(credit);
        totalCredits += parseFloat(credit);
    }

    if (totalCredits === 0) {
        alert("Please add at least one subject");
        return;
    }

    const gpa = totalPoints / totalCredits;

    document.getElementById("result").innerHTML =
        "Your GPA is: " + gpa.toFixed(2);
}
