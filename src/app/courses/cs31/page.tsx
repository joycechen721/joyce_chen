const cs31 = () => {
  return (
    <>
      <h1 className="course-heading">CS31</h1>
      <p className="course-desc">
        With 70% of our class (by an educated guess) consisting of cracked bay
        area kids, “nervous” was an understatement of how I felt going into
        CS31. I was fully expecting myself to be overwhelmed with confusion,
        fail all the projects, and drag down the average on tests. A college CS
        class?? Bruh the ones in high school were tough enough, and now they’re
        being upgraded! But then again, part of my outlook on life entails
        seeing things in the most negative light possible, so that any spark of
        positivity would bring me joy and happiness. So yeah, I was definitely
        being dramatic.
        <br></br>
        <br></br>
        But seriously, CS31 is the rite to passage for all CS majors at UCLA. In
        high school, I did pretty basic programming: just your normal loops,
        functions, conditionals, etc, stuff taught in APCSA. Part of me was like
        *chill bro, CS31 will just be like APCSA but in C++* (which it did kinda
        turn out to be). And the other part of me was like *bro, you are so done
        screwed, taking a class with USACO platinum people and fellas who’ve
        already done cs internships?* BUT if you find yourself thinking the
        latter like I did, just don’t. Please don’t. Some people came in with
        zero programming knowledge, which was totally 150% OK!! CS31 was meant
        for complete beginners in the first place, and if you have even a bit of
        programming experience, you’re *bing chilling* in this class.
        <br></br>
        <br></br>
        CS31 taught you C++ syntax. Starting from variables, conditionals,
        loops, all the way to pointers, structs/classes, dynamic memory
        allocation, and more. You’ll be using either Visual Studio (windows) or
        XCode (mac) to write programs. We also had “projects” every 2 weeks that
        had you write programs requiring knowledge of everything learned up to
        date in the class. For instance, Project 3 required you to know how to
        manipulate strings and use loops, alongside variable declaration and all
        the fun stuff you learned beforehand. Project 7 (our last project)
        required you to know everything taught in the class. The projects were
        by no means difficult; as long as you pay close attention to his
        lectures, fully understand the material, and start early, you’re fine.
        Our class average was above 90 for every single project.
        <br></br>
        <br></br>
        <b>class structure</b>
        <span className="course-listitem">
          windows people - use visual studio to write and compile your code. mac
          people - use xcode.
        </span>
        <span className="course-listitem">
          smallberg had this “flipped classroom” system going on, so his
          lectures were video recordings posted on bruinlearn, and the actual
          “in-person” lectures were q&a sessions. in-person in double quotes
          because no one went to the sessions lol. he gave an option to watch on
          zoom, which made raising your hand at la kretz 110 (mind you, a 30
          minute hike from the hill) equivalent to typing in chat with your
          camera off sitting on your bed. the superior option is clear as day.
          also, he posts the q&a session recordings afterwards, further
          incentivizing you to skip his “lectures” as you could just watch them
          back on 1.5x speed later :p
        </span>
        <span className="course-listitem">
          his lecture recordings (taught content) were great! smallberg’s really
          good at explaining concepts in detail, making them easy to understand.
          take notes and write down niche points (like the cin.ignore thing and
          char → int conversions). also watch them on 1.5x speed cause he can
          talk a bit slow (not 2x tho cause smallberg will sound like a
          chipmunk). you will learn a lot about dennis ritchie’s decisions when
          creating the C++ language in smallberg’s lectures.
        </span>
        <span className="course-listitem">
          zybook. did I mention that we were required to by a $70 textbook that
          could only be used until the end of the quarter? an online textbook,
          at that. annoying as heck on a financial note, but hey the textbook’s
          actually pretty helpful. we do some interactive homework assignments
          on there, and overall it’s a great review tool for upcoming tests.
        </span>
        <br></br>
        <br></br>
        <b>grading system</b>
        <span className="course-listitem">
          homework — worth negligible points. mostly just clicking through
          activities on zybook or filling out surveys.
        </span>
        <span className="course-listitem">
          7 projects — worth almost half your grade. they were doable! smallberg
          gives you super detailed project specs (instruction pdf’s) that have
          faq sections and even provides an occassional “sanity checker.” also
          there are plenty of open office hours throughout the weeks, so you’re
          chilling on this aspect if you START EARLY (as in, the day the project
          gets assigned).
        </span>
        <span className="course-listitem">
          2 midterms — 20% of your grade. weren’t too hard, around 4-5 pages in
          a 2 hour time span if I remember correctly. questions were code
          writing, multiple choice, code tracing, bug-fixing, etc. smallberg
          gives you practice exams but they aren’t similar to the actual test;
          however, if you dedicate time to truly understanding the concepts
          taught, you’ll ace these midterms.
        </span>
        <span className="course-listitem">
          final — 30% of your grade. the most traumatic event i went through in
          fall ‘22. will not elaborate further.
        </span>
        <br></br>
        <br></br>
        <b>more on projects</b> - project submissions were not how I expected
        them to be going into the class. this will all get explained to you
        clearly in class, but basically we had to use a “seasnet terminal” to
        test our code, since our programs were being judged with the g++
        compiler. xcode/visual studio compilers can sometimes fail to detect
        memory leaks and small errors that would appear on the seasnet compiler,
        so even though it’s not actually required, still always run your code on
        seasnet before you turn it in! - we don’t get to see his test cases (in
        fact, we have to write our own!!), so upon submission you just gotta
        pray that your code will pass. testing for edge cases on your own is
        extremely important. - in my opinion, projects 4 and 7 were the worst.
        project 4 was insanely tedious (not hard at all, but my lazy bum hates
        writing testcases which half this project was about), and project 7 was
        just…yeah you’ll see. smallberg hits you in the face with a 600-line
        code file and expects you to understand the code when in reality you’re
        just scrolling up and down endlessly trying to figure out how each
        function relates to one another. trust me, the worst part about project
        7 was just *understanding* what the hell was happening in the code; the
        actual implementation wasn’t bad. - yup, we had project reports due for
        nearly every project!! you just gotta write about an “obstacle” you
        faced while writing the program and include screenshots of your
        testcases + a short explanation for each of your testcases.
      </p>
    </>
  );
};

export default cs31;
