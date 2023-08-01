

def sample_responses(input_text):
    user_message = str(input_text).lower()

    if user_message in ("Hello", "hi", "sup"):
        return "Hello! How are you today? type /start to know the functionalities"

    if user_message in ("who are you", "who are you?", "what do you do", "what do you do?"):
        return "I am Job search bot. I will guide you to find jobs"

    if user_message in ("how to apply for jobs?", "guide me for jobs"):
        return '''You can get job links by writing the following commands
     /Software_Engineer
     /web_developer
     /marketingmanager
     /HR 
     /Teacher 
     /Bank 
     /Doctor '''

    if user_message in ("create resume", "resume", "/resume"):
        return '''If you don't have a resume we can help you create one - You can visit these sites for building some amazing resumes with good templates to ace your resume :
               1) https://www.canva.com/templates/?query=resume
               2) https://resume.io/resume-templates
               
            '''

    if user_message in ("tips", "Interview tips", "interview tips", "/interview tips"):
        return '''You can see all these blogs so that to ace the interview and you never miss the chance 
        1) https://resources.workable.com/tutorial/how-to-ace-interview
        2) https://in.indeed.com/career-advice/interviewing/how-to-ace-your-next-interview'''

    if user_message in ("job profile partially matches", "job profile doesn't match", "what are the benifits of participating in hackathon"):
        return '''You should check out the entire skillset and even if 80% matches you should go for it!!
                  This is the benefit of applying for jobs that you learn on the go while working on industry level projects
                  Most of the time recruiter looks for your zeal to learn and problem solving skills'''

    if user_message in ("should i apply for jobs/internships if i am a fresher"):
        return "Yes, if you fulfill the skills and eligibility criteria, you should definitely apply."

    return "Please be more specific with your text or command"
