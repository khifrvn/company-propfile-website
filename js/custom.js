$('#send').click(function() {
2. // get content
3. var name = $('#name').val();
4. var subject = $('#subject').val();
5. var message = $('#message').val();
6.
7. // set content
8. $('#respon').text('Thank you for contacting us. Your message has been sent.');
9. $('#getname').text('Your Name : ' + name);
10. $('#getsubject').text('Your Subject : ' + subject);
11. $('#getmessage').text('Your Message : ' + message);
12. }); 