
function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var resumePath = 'path/to/your/resume.pdfC:\Users\amana\OneDrive\Desktop\portfolio\simple\Aman-resume.pdf';

    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the download link's attributes
    downloadLink.href = resumePath;
    downloadLink.download = 'C:\Users\amana\OneDrive\Desktop\portfolio\simple\Aman-resume.pdf';

    // Append the link to the document body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  }
