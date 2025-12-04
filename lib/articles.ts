``
import { Droplets, Move, Brain, Target, Heart, Zap, Moon, Coffee, Smartphone, Smile, Sun, Wind, BookOpen, Clock, Phone, List, Leaf, Shield, Star, Award, Briefcase, Users, Music, Camera, PenTool, Anchor, Compass, Map, Globe, Key, Lock, Unlock, Eye, Ear, Speaker, Mic, Radio, Tv, Monitor, Laptop, Tablet, Watch, Battery, Plug, Lightbulb, Flame } from "lucide-react"

export const articles = [
    // --- HEALTH & FITNESS ---
    {
        id: "art-01",
        category: "Health",
        title: "Morning Hydration",
        subtitle: "Jumpstart your metabolism",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "Water is the fuel your brain needs to fire up its engines after a long night's sleep.",
        science: "Dehydration causes fatigue. Drinking 500ml of water upon waking increases metabolic rate by 30%.",
        sections: [
            { title: "Why It Matters", content: "Your body loses water while you sleep. Rehydrating immediately boosts alertness.", quote: "Hydrate before you caffeinate." }
        ],
        suggestions: ["Keep water by your bed.", "Add lemon for flavor."],
        routine: [{ step: "Drink Water", icon: Droplets }],
        takeaway: "Hydration is energy."
    },
    {
        id: "art-02",
        category: "Health",
        title: "Daily Walking",
        subtitle: "The simplest superfood",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800",
        color: "bg-green-50 dark:bg-green-950/30",
        accent: "text-green-600 dark:text-green-400",
        intro: "Walking is the most underrated exercise for longevity and mental clarity.",
        science: "Walking 30 minutes a day reduces the risk of heart disease by 19%.",
        sections: [
            { title: "Mental Clarity", content: "Walking boosts creativity by 60%.", quote: "Solvitur ambulando (It is solved by walking)." }
        ],
        suggestions: ["Walk during calls.", "Park further away."],
        routine: [{ step: "Walk 20m", icon: Move }],
        takeaway: "Keep moving."
    },
    {
        id: "art-03",
        category: "Health",
        title: "Stretching 101",
        subtitle: "Flexibility for longevity",
        image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800",
        color: "bg-orange-50 dark:bg-orange-950/30",
        accent: "text-orange-600 dark:text-orange-400",
        intro: "Stiff muscles lead to injury. Keep your body fluid and youthful.",
        science: "Stretching increases blood flow to muscles and improves posture.",
        sections: [
            { title: "Morning Flow", content: "5 minutes of stretching can undo 8 hours of stiffness.", quote: "Motion is lotion." }
        ],
        suggestions: ["Touch your toes.", "Reach for the sky."],
        routine: [{ step: "Stretch", icon: Move }],
        takeaway: "Stay flexible."
    },
    {
        id: "art-04",
        category: "Health",
        title: "Cold Showers",
        subtitle: "Wake up your nervous system",
        image: "https://images.unsplash.com/photo-1540960808944-5658faf2c16c?auto=format&fit=crop&w=800",
        color: "bg-cyan-50 dark:bg-cyan-950/30",
        accent: "text-cyan-600 dark:text-cyan-400",
        intro: "Embrace the cold to build resilience and boost immunity.",
        science: "Cold exposure increases dopamine by 250% and boosts white blood cell count.",
        sections: [
            { title: "The Shock", content: "The initial shock forces deep breathing and alertness.", quote: "Comfort is the enemy of growth." }
        ],
        suggestions: ["Start with 30 seconds.", "Focus on breathing."],
        routine: [{ step: "Cold Shower", icon: Droplets }],
        takeaway: "Embrace discomfort."
    },
    {
        id: "art-05",
        category: "Health",
        title: "Sunlight Exposure",
        subtitle: "Set your circadian rhythm",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800",
        color: "bg-yellow-50 dark:bg-yellow-950/30",
        accent: "text-yellow-600 dark:text-yellow-400",
        intro: "Morning light is the strongest signal for your biological clock.",
        science: "Viewing sunlight within 1 hour of waking increases cortisol (alertness) and sets melatonin for sleep.",
        sections: [
            { title: "Timing", content: "Get outside before 10 AM.", quote: "Let there be light." }
        ],
        suggestions: ["Go outside for 10 mins.", "Don't wear sunglasses."],
        routine: [{ step: "Sunlight", icon: Sun }],
        takeaway: "Light is medicine."
    },
    {
        id: "art-06",
        category: "Health",
        title: "Eye Health",
        subtitle: "The 20-20-20 Rule",
        image: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?auto=format&fit=crop&w=800",
        color: "bg-indigo-50 dark:bg-indigo-950/30",
        accent: "text-indigo-600 dark:text-indigo-400",
        intro: "Protect your vision in a digital world.",
        science: "Digital eye strain causes headaches and blurred vision.",
        sections: [
            { title: "The Rule", content: "Every 20 mins, look at something 20 feet away for 20 seconds.", quote: "Look up, look out." }
        ],
        suggestions: ["Set a timer.", "Blink more often."],
        routine: [{ step: "Eye Rest", icon: Eye }],
        takeaway: "Save your sight."
    },
    {
        id: "art-07",
        category: "Health",
        title: "Posture Check",
        subtitle: "Stand tall, feel confident",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800",
        color: "bg-teal-50 dark:bg-teal-950/30",
        accent: "text-teal-600 dark:text-teal-400",
        intro: "Your posture dictates your mood and energy levels.",
        science: "Power posing decreases cortisol and increases testosterone.",
        sections: [
            { title: "Alignment", content: "Ears over shoulders, shoulders over hips.", quote: "Stand like a superhero." }
        ],
        suggestions: ["Shoulders back.", "Chin up."],
        routine: [{ step: "Posture", icon: Move }],
        takeaway: "Body language matters."
    },

    // --- PRODUCTIVITY ---
    {
        id: "art-08",
        category: "Productivity",
        title: "Deep Work",
        subtitle: "Focus without distraction",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800",
        color: "bg-purple-50 dark:bg-purple-950/30",
        accent: "text-purple-600 dark:text-purple-400",
        intro: "The ability to perform deep work is becoming increasingly rare and valuable.",
        science: "It takes 23 minutes to regain focus after a distraction.",
        sections: [
            { title: "The Zone", content: "Eliminate all notifications.", quote: "Distraction is the enemy of depth." }
        ],
        suggestions: ["Turn on Do Not Disturb.", "Use noise-canceling headphones."],
        routine: [{ step: "Deep Work", icon: Brain }],
        takeaway: "Focus is a superpower."
    },
    {
        id: "art-09",
        category: "Productivity",
        title: "Pomodoro Technique",
        subtitle: "Master your time",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800",
        color: "bg-red-50 dark:bg-red-950/30",
        accent: "text-red-600 dark:text-red-400",
        intro: "Work in short, intense bursts to maintain high energy.",
        science: "The brain can only maintain peak focus for about 90 minutes.",
        sections: [
            { title: "The Method", content: "25 minutes work, 5 minutes break.", quote: "Timeboxing creates urgency." }
        ],
        suggestions: ["Use a timer.", "Actually take the break."],
        routine: [{ step: "Pomodoro", icon: Clock }],
        takeaway: "Work smart, not hard."
    },
    {
        id: "art-10",
        category: "Productivity",
        title: "Eat That Frog",
        subtitle: "Do the hard thing first",
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=800",
        color: "bg-green-50 dark:bg-green-950/30",
        accent: "text-green-600 dark:text-green-400",
        intro: "Tackle your biggest, ugliest task first thing in the morning.",
        science: "Willpower is highest in the morning and depletes throughout the day.",
        sections: [
            { title: "Momentum", content: "Completing the big task gives you a dopamine win.", quote: "If you have to eat a frog, don't look at it for too long." }
        ],
        suggestions: ["Identify your frog.", "Do it before checking email."],
        routine: [{ step: "Eat Frog", icon: Check }],
        takeaway: "Prioritize impact."
    },
    {
        id: "art-11",
        category: "Productivity",
        title: "Inbox Zero",
        subtitle: "Clear mental clutter",
        image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800",
        color: "bg-gray-50 dark:bg-gray-950/30",
        accent: "text-gray-600 dark:text-gray-400",
        intro: "A cluttered inbox leads to a cluttered mind.",
        science: "Unfinished tasks create 'attention residue' that lowers IQ.",
        sections: [
            { title: "Process", content: "Delete, Delegate, Defer, Do.", quote: "Email is a to-do list created by others." }
        ],
        suggestions: ["Unsubscribe ruthlessly.", "Batch check emails."],
        routine: [{ step: "Clear Inbox", icon: Briefcase }],
        takeaway: "Reclaim your attention."
    },
    {
        id: "art-12",
        category: "Productivity",
        title: "Plan Tomorrow Tonight",
        subtitle: "Wake up with purpose",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800",
        color: "bg-indigo-50 dark:bg-indigo-950/30",
        accent: "text-indigo-600 dark:text-indigo-400",
        intro: "Decide your priorities before you sleep to avoid morning decision fatigue.",
        science: "Planning reduces anxiety and primes the brain for action.",
        sections: [
            { title: "Top 3", content: "List the 3 most important tasks for tomorrow.", quote: "Failing to plan is planning to fail." }
        ],
        suggestions: ["Write it down.", "Visualize the day."],
        routine: [{ step: "Plan Day", icon: List }],
        takeaway: "Start ahead."
    },
    {
        id: "art-13",
        category: "Productivity",
        title: "Single-Tasking",
        subtitle: "The myth of multitasking",
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800",
        color: "bg-pink-50 dark:bg-pink-950/30",
        accent: "text-pink-600 dark:text-pink-400",
        intro: "Multitasking lowers your IQ and kills productivity.",
        science: "Switching tasks costs 40% of your productive time.",
        sections: [
            { title: "Focus", content: "Do one thing at a time. Finish it.", quote: "Be here, now." }
        ],
        suggestions: ["Close tabs.", "Put phone away."],
        routine: [{ step: "Single Task", icon: Target }],
        takeaway: "One thing at a time."
    },
    {
        id: "art-14",
        category: "Productivity",
        title: "Review Your Week",
        subtitle: "Course correct regularly",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "You can't improve what you don't measure.",
        science: "Reflection consolidates learning and improves future performance.",
        sections: [
            { title: "The Audit", content: "What went well? What didn't?", quote: "Feedback is the breakfast of champions." }
        ],
        suggestions: ["Check your calendar.", "Review goals."],
        routine: [{ step: "Weekly Review", icon: CalendarIcon }],
        takeaway: "Iterate to success."
    },

    // --- MINDFULNESS ---
    {
        id: "art-15",
        category: "Mindfulness",
        title: "Box Breathing",
        subtitle: "Calm in 16 seconds",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800",
        color: "bg-teal-50 dark:bg-teal-950/30",
        accent: "text-teal-600 dark:text-teal-400",
        intro: "A Navy SEAL technique to hack your stress response.",
        science: "Slow breathing stimulates the vagus nerve, lowering heart rate.",
        sections: [
            { title: "4-4-4-4", content: "Inhale 4, Hold 4, Exhale 4, Hold 4.", quote: "Breath is control." }
        ],
        suggestions: ["Do it before meetings.", "Do it when angry."],
        routine: [{ step: "Box Breath", icon: Wind }],
        takeaway: "Stay cool."
    },
    {
        id: "art-16",
        category: "Mindfulness",
        title: "Gratitude Journaling",
        subtitle: "Rewire for happiness",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
        color: "bg-yellow-50 dark:bg-yellow-950/30",
        accent: "text-yellow-600 dark:text-yellow-400",
        intro: "Shift your focus from what's missing to what's present.",
        science: "Gratitude increases dopamine and serotonin.",
        sections: [
            { title: "3 Things", content: "Write down 3 things you are grateful for.", quote: "Enough is a feast." }
        ],
        suggestions: ["Be specific.", "Feel the emotion."],
        routine: [{ step: "Gratitude", icon: Heart }],
        takeaway: "Abundance mindset."
    },
    {
        id: "art-17",
        category: "Mindfulness",
        title: "Digital Detox",
        subtitle: "Unplug to recharge",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800",
        color: "bg-gray-50 dark:bg-gray-950/30",
        accent: "text-gray-600 dark:text-gray-400",
        intro: "Reclaim your attention from the screen.",
        science: "Constant connectivity raises cortisol levels.",
        sections: [
            { title: "Disconnect", content: "Turn off devices for 1 hour.", quote: "Connect with reality." }
        ],
        suggestions: ["No phone at dinner.", "Leave phone in other room."],
        routine: [{ step: "No Phone", icon: Smartphone }],
        takeaway: "Be present."
    },
    {
        id: "art-18",
        category: "Mindfulness",
        title: "Meditation",
        subtitle: "Gym for your mind",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800",
        color: "bg-purple-50 dark:bg-purple-950/30",
        accent: "text-purple-600 dark:text-purple-400",
        intro: "Train your brain to focus and let go.",
        science: "Meditation increases grey matter density in the brain.",
        sections: [
            { title: "Just Sit", content: "Focus on your breath. When mind wanders, bring it back.", quote: "Quiet the mind." }
        ],
        suggestions: ["Start with 5 mins.", "Use an app."],
        routine: [{ step: "Meditate", icon: Brain }],
        takeaway: "Inner peace."
    },
    {
        id: "art-19",
        category: "Mindfulness",
        title: "Nature Walk",
        subtitle: "Forest bathing",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
        color: "bg-green-50 dark:bg-green-950/30",
        accent: "text-green-600 dark:text-green-400",
        intro: "Nature heals the soul and calms the mind.",
        science: "Time in nature lowers blood pressure and stress hormones.",
        sections: [
            { title: "Green Therapy", content: "Immerse yourself in greenery.", quote: "Nature does not hurry, yet everything is accomplished." }
        ],
        suggestions: ["Leave headphones at home.", "Observe the details."],
        routine: [{ step: "Nature", icon: Leaf }],
        takeaway: "Root yourself."
    },
    {
        id: "art-20",
        category: "Mindfulness",
        title: "Journaling",
        subtitle: "Clarify your thoughts",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800",
        color: "bg-orange-50 dark:bg-orange-950/30",
        accent: "text-orange-600 dark:text-orange-400",
        intro: "Get your thoughts out of your head and onto paper.",
        science: "Expressive writing reduces stress and improves immune function.",
        sections: [
            { title: "Brain Dump", content: "Write whatever comes to mind.", quote: "Paper is patient." }
        ],
        suggestions: ["Do it morning or night.", "Don't edit."],
        routine: [{ step: "Journal", icon: PenTool }],
        takeaway: "Clear mind."
    },

    // --- SLEEP ---
    {
        id: "art-21",
        category: "Sleep",
        title: "No Screens Before Bed",
        subtitle: "Protect your melatonin",
        image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800",
        color: "bg-indigo-50 dark:bg-indigo-950/30",
        accent: "text-indigo-600 dark:text-indigo-400",
        intro: "Blue light tricks your brain into thinking it's daytime.",
        science: "Blue light suppresses melatonin production by 50%.",
        sections: [
            { title: "Digital Sunset", content: "Turn off screens 1 hour before sleep.", quote: "Darkness is the signal for rest." }
        ],
        suggestions: ["Read a book.", "Dim the lights."],
        routine: [{ step: "No Screens", icon: Moon }],
        takeaway: "Sleep deeper."
    },
    {
        id: "art-22",
        category: "Sleep",
        title: "Cool Room",
        subtitle: "Hibernate for health",
        image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "Your body needs to drop in temperature to sleep.",
        science: "The optimal sleeping temperature is around 18°C (65°F).",
        sections: [
            { title: "Thermostat", content: "Keep it cool.", quote: "Cool head, warm heart." }
        ],
        suggestions: ["Open a window.", "Use breathable bedding."],
        routine: [{ step: "Cool Room", icon: Wind }],
        takeaway: "Chill out."
    },
    {
        id: "art-23",
        category: "Sleep",
        title: "Caffeine Cutoff",
        subtitle: "Respect the half-life",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800",
        color: "bg-brown-50 dark:bg-orange-950/30",
        accent: "text-orange-800 dark:text-orange-400",
        intro: "Coffee stays in your system longer than you think.",
        science: "Caffeine has a half-life of 5-6 hours. A 4 PM coffee is still 50% active at 10 PM.",
        sections: [
            { title: "Timing", content: "Stop caffeine by 2 PM.", quote: "Sleep is the best performance enhancer." }
        ],
        suggestions: ["Switch to decaf.", "Drink herbal tea."],
        routine: [{ step: "No Caffeine", icon: Coffee }],
        takeaway: "Protect your sleep."
    },
    {
        id: "art-24",
        category: "Sleep",
        title: "Consistent Schedule",
        subtitle: "Anchor your rhythm",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800",
        color: "bg-purple-50 dark:bg-purple-950/30",
        accent: "text-purple-600 dark:text-purple-400",
        intro: "Your body loves routine.",
        science: "Irregular sleep confuses your circadian rhythm, leading to 'social jetlag'.",
        sections: [
            { title: "Regularity", content: "Wake up at the same time every day.", quote: "Rhythm is life." }
        ],
        suggestions: ["Even on weekends.", "Set an alarm."],
        routine: [{ step: "Wake Up", icon: Clock }],
        takeaway: "Be consistent."
    },
    {
        id: "art-25",
        category: "Sleep",
        title: "Magnesium",
        subtitle: "The relaxation mineral",
        image: "https://images.unsplash.com/photo-1515592265604-5b40b12c8d2d?auto=format&fit=crop&w=800",
        color: "bg-gray-50 dark:bg-gray-950/30",
        accent: "text-gray-600 dark:text-gray-400",
        intro: "Most people are deficient in this crucial mineral.",
        science: "Magnesium aids in muscle relaxation and GABA production (calming neurotransmitter).",
        sections: [
            { title: "Supplement", content: "Take magnesium glycinate before bed.", quote: "Relax your muscles." }
        ],
        suggestions: ["Eat spinach.", "Take a supplement."],
        routine: [{ step: "Magnesium", icon: Battery }],
        takeaway: "Relax deeply."
    },

    // --- NUTRITION ---
    {
        id: "art-26",
        category: "Nutrition",
        title: "Eat Real Food",
        subtitle: "Avoid processed junk",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800",
        color: "bg-green-50 dark:bg-green-950/30",
        accent: "text-green-600 dark:text-green-400",
        intro: "If it comes from a plant, eat it. If it was made in a plant, don't.",
        science: "Processed foods are engineered to be hyper-palatable and addictive.",
        sections: [
            { title: "Whole Foods", content: "Focus on vegetables, fruits, and meats.", quote: "Let food be thy medicine." }
        ],
        suggestions: ["Shop the perimeter.", "Read labels."],
        routine: [{ step: "Eat Clean", icon: Leaf }],
        takeaway: "Fuel your body."
    },
    {
        id: "art-27",
        category: "Nutrition",
        title: "Intermittent Fasting",
        subtitle: "Give digestion a break",
        image: "https://images.unsplash.com/photo-1547496502-ffa222d79634?auto=format&fit=crop&w=800",
        color: "bg-orange-50 dark:bg-orange-950/30",
        accent: "text-orange-600 dark:text-orange-400",
        intro: "It's not just what you eat, but when you eat.",
        science: "Fasting triggers autophagy, where cells clean out damaged components.",
        sections: [
            { title: "16:8", content: "Fast for 16 hours, eat for 8.", quote: "Hunger is the best sauce." }
        ],
        suggestions: ["Skip breakfast.", "Stop eating at 8 PM."],
        routine: [{ step: "Fast", icon: Clock }],
        takeaway: "Heal from within."
    },
    {
        id: "art-28",
        category: "Nutrition",
        title: "Mindful Eating",
        subtitle: "Savor every bite",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800",
        color: "bg-red-50 dark:bg-red-950/30",
        accent: "text-red-600 dark:text-red-400",
        intro: "Slow down and enjoy your food.",
        science: "It takes 20 minutes for satiety signals to reach the brain.",
        sections: [
            { title: "Chew", content: "Chew each bite 20 times.", quote: "Eat to live, don't live to eat." }
        ],
        suggestions: ["No TV while eating.", "Put fork down."],
        routine: [{ step: "Savor", icon: Smile }],
        takeaway: "Digest better."
    },
    {
        id: "art-29",
        category: "Nutrition",
        title: "Protein First",
        subtitle: "Build blocks of life",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800",
        color: "bg-yellow-50 dark:bg-yellow-950/30",
        accent: "text-yellow-600 dark:text-yellow-400",
        intro: "Protein is essential for muscle repair and satiety.",
        science: "High protein intake increases metabolism and reduces appetite.",
        sections: [
            { title: "Prioritize", content: "Eat protein at every meal.", quote: "Strong body, strong mind." }
        ],
        suggestions: ["Eggs for breakfast.", "Lean meats."],
        routine: [{ step: "Eat Protein", icon: Award }],
        takeaway: "Build strength."
    },
    {
        id: "art-30",
        category: "Nutrition",
        title: "Cut Sugar",
        subtitle: "The white poison",
        image: "https://images.unsplash.com/photo-1516919549054-e08258825f80?auto=format&fit=crop&w=800",
        color: "bg-pink-50 dark:bg-pink-950/30",
        accent: "text-pink-600 dark:text-pink-400",
        intro: "Sugar causes inflammation and energy crashes.",
        science: "Sugar activates the same brain regions as cocaine.",
        sections: [
            { title: "Detox", content: "Reduce added sugars.", quote: "Sweetness is a treat, not a staple." }
        ],
        suggestions: ["Read labels.", "Eat fruit instead."],
        routine: [{ step: "No Sugar", icon: Shield }],
        takeaway: "Stable energy."
    },

    // --- PERSONAL GROWTH ---
    {
        id: "art-31",
        category: "Growth",
        title: "Read Daily",
        subtitle: "Download wisdom",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800",
        color: "bg-indigo-50 dark:bg-indigo-950/30",
        accent: "text-indigo-600 dark:text-indigo-400",
        intro: "Reading allows you to borrow the brains of the smartest people in history.",
        science: "Reading reduces stress by 68% and improves brain connectivity.",
        sections: [
            { title: "Habit", content: "Read 10 pages a day.", quote: "Leaders are readers." }
        ],
        suggestions: ["Carry a book.", "Audiobooks count."],
        routine: [{ step: "Read", icon: BookOpen }],
        takeaway: "Learn forever."
    },
    {
        id: "art-32",
        category: "Growth",
        title: "Learn a Skill",
        subtitle: "Neuroplasticity in action",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "Keep your brain young by challenging it.",
        science: "Learning new things creates new neural pathways.",
        sections: [
            { title: "Practice", content: "Dedicate 20 mins to a new hobby.", quote: "Growth happens outside the comfort zone." }
        ],
        suggestions: ["Learn a language.", "Play an instrument."],
        routine: [{ step: "Practice", icon: Brain }],
        takeaway: "Stay sharp."
    },
    {
        id: "art-33",
        category: "Growth",
        title: "Visualisation",
        subtitle: "See it to be it",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=800",
        color: "bg-purple-50 dark:bg-purple-950/30",
        accent: "text-purple-600 dark:text-purple-400",
        intro: "Your brain can't distinguish between vivid imagination and reality.",
        science: "Athletes use visualization to improve performance by training neural pathways.",
        sections: [
            { title: "Mental Rehearsal", content: "Visualize your success in detail.", quote: "If you can dream it, you can do it." }
        ],
        suggestions: ["Close eyes.", "Feel the outcome."],
        routine: [{ step: "Visualize", icon: Eye }],
        takeaway: "Create reality."
    },
    {
        id: "art-34",
        category: "Growth",
        title: "Affirmations",
        subtitle: "Reprogram your mind",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800",
        color: "bg-pink-50 dark:bg-pink-950/30",
        accent: "text-pink-600 dark:text-pink-400",
        intro: "Change your self-talk to change your life.",
        science: "Self-affirmation activates the reward centers of the brain.",
        sections: [
            { title: "Speak It", content: "I am capable. I am strong.", quote: "I am." }
        ],
        suggestions: ["Say it loud.", "Look in mirror."],
        routine: [{ step: "Affirm", icon: Mic }],
        takeaway: "Believe it."
    },
    {
        id: "art-35",
        category: "Growth",
        title: "Comfort Zone",
        subtitle: "Do something scary",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800",
        color: "bg-red-50 dark:bg-red-950/30",
        accent: "text-red-600 dark:text-red-400",
        intro: "Fear is a compass showing you where to go.",
        science: "Overcoming fear releases dopamine and builds confidence.",
        sections: [
            { title: "Challenge", content: "Do one thing that scares you.", quote: "Feel the fear and do it anyway." }
        ],
        suggestions: ["Cold call.", "Public speaking."],
        routine: [{ step: "Risk", icon: Zap }],
        takeaway: "Be brave."
    },

    // --- RELATIONSHIPS ---
    {
        id: "art-36",
        category: "Social",
        title: "Active Listening",
        subtitle: "Hear to understand",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800",
        color: "bg-teal-50 dark:bg-teal-950/30",
        accent: "text-teal-600 dark:text-teal-400",
        intro: "Most people listen to reply, not to understand.",
        science: "Feeling heard releases oxytocin and strengthens bonds.",
        sections: [
            { title: "Presence", content: "Put the phone away. Eye contact.", quote: "Listening is love." }
        ],
        suggestions: ["Don't interrupt.", "Ask questions."],
        routine: [{ step: "Listen", icon: Ear }],
        takeaway: "Connect deeply."
    },
    {
        id: "art-37",
        category: "Social",
        title: "Random Kindness",
        subtitle: "Spread joy",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800",
        color: "bg-yellow-50 dark:bg-yellow-950/30",
        accent: "text-yellow-600 dark:text-yellow-400",
        intro: "Kindness is contagious.",
        science: "Helping others releases endorphins (Helper's High).",
        sections: [
            { title: "Give", content: "Do something nice for a stranger.", quote: "Be the change." }
        ],
        suggestions: ["Pay for coffee.", "Compliment someone."],
        routine: [{ step: "Kindness", icon: Heart }],
        takeaway: "Be kind."
    },
    {
        id: "art-38",
        category: "Social",
        title: "Call a Friend",
        subtitle: "Maintain your tribe",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "Social connection is the strongest predictor of longevity.",
        science: "Loneliness is as damaging as smoking.",
        sections: [
            { title: "Reach Out", content: "Call someone just to say hi.", quote: "Friends are family we choose." }
        ],
        suggestions: ["Schedule calls.", "Send a voice note."],
        routine: [{ step: "Call", icon: Phone }],
        takeaway: "Stay close."
    },
    {
        id: "art-39",
        category: "Social",
        title: "Boundaries",
        subtitle: "Protect your energy",
        image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&w=800",
        color: "bg-gray-50 dark:bg-gray-950/30",
        accent: "text-gray-600 dark:text-gray-400",
        intro: "Saying no to others is saying yes to yourself.",
        science: "Clear boundaries reduce resentment and burnout.",
        sections: [
            { title: "Say No", content: "Don't overcommit.", quote: "No is a complete sentence." }
        ],
        suggestions: ["Be polite but firm.", "Value your time."],
        routine: [{ step: "Say No", icon: Shield }],
        takeaway: "Respect yourself."
    },
    {
        id: "art-40",
        category: "Social",
        title: "Forgiveness",
        subtitle: "Let go of the weight",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800",
        color: "bg-indigo-50 dark:bg-indigo-950/30",
        accent: "text-indigo-600 dark:text-indigo-400",
        intro: "Holding a grudge is like drinking poison and expecting the other person to die.",
        science: "Forgiveness lowers blood pressure and heart rate.",
        sections: [
            { title: "Release", content: "Let go for your own sake.", quote: "Forgive to live." }
        ],
        suggestions: ["Write a letter.", "Burn it."],
        routine: [{ step: "Forgive", icon: Leaf }],
        takeaway: "Free yourself."
    },

    // --- WEALTH & FINANCE ---
    {
        id: "art-41",
        category: "Wealth",
        title: "Track Expenses",
        subtitle: "Know your numbers",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800",
        color: "bg-green-50 dark:bg-green-950/30",
        accent: "text-green-600 dark:text-green-400",
        intro: "What gets measured gets managed.",
        science: "Awareness of spending habits leads to 15% reduction in waste.",
        sections: [
            { title: "Audit", content: "Review your bank statement.", quote: "Money is a tool." }
        ],
        suggestions: ["Use an app.", "Check daily."],
        routine: [{ step: "Track Money", icon: Briefcase }],
        takeaway: "Financial freedom."
    },
    {
        id: "art-42",
        category: "Wealth",
        title: "Save First",
        subtitle: "Pay yourself first",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800",
        color: "bg-emerald-50 dark:bg-emerald-950/30",
        accent: "text-emerald-600 dark:text-emerald-400",
        intro: "Don't save what is left after spending; spend what is left after saving.",
        science: "Automated savings increase wealth accumulation by 3x.",
        sections: [
            { title: "Automate", content: "Set up auto-transfer.", quote: "Compound interest is magic." }
        ],
        suggestions: ["10% of income.", "Emergency fund."],
        routine: [{ step: "Save", icon: Lock }],
        takeaway: "Build wealth."
    },
    {
        id: "art-43",
        category: "Wealth",
        title: "Invest",
        subtitle: "Make money sleep",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800",
        color: "bg-cyan-50 dark:bg-cyan-950/30",
        accent: "text-cyan-600 dark:text-cyan-400",
        intro: "Inflation eats cash. Assets build wealth.",
        science: "The S&P 500 has returned 10% annually on average.",
        sections: [
            { title: "Start Early", content: "Time in the market beats timing the market.", quote: "Plant the tree today." }
        ],
        suggestions: ["Index funds.", "Real estate."],
        routine: [{ step: "Invest", icon: TrendingUp }],
        takeaway: "Grow assets."
    },
    {
        id: "art-44",
        category: "Wealth",
        title: "No Impulse Buys",
        subtitle: "The 24-hour rule",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800",
        color: "bg-red-50 dark:bg-red-950/30",
        accent: "text-red-600 dark:text-red-400",
        intro: "Wait 24 hours before buying anything non-essential.",
        science: "Delaying gratification strengthens the prefrontal cortex.",
        sections: [
            { title: "Wait", content: "Do you really need it?", quote: "Less is more." }
        ],
        suggestions: ["Add to cart, wait.", "Sleep on it."],
        routine: [{ step: "Wait", icon: Clock }],
        takeaway: "Buy conscious."
    },
    {
        id: "art-45",
        category: "Wealth",
        title: "Learn Finance",
        subtitle: "Financial literacy",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800",
        color: "bg-blue-50 dark:bg-blue-950/30",
        accent: "text-blue-600 dark:text-blue-400",
        intro: "Nobody cares about your money more than you do.",
        science: "Financial stress is a leading cause of divorce and health issues.",
        sections: [
            { title: "Educate", content: "Read one finance article a week.", quote: "Knowledge is profit." }
        ],
        suggestions: ["Read books.", "Listen to podcasts."],
        routine: [{ step: "Study Money", icon: BookOpen }],
        takeaway: "Master money."
    },

    // --- ENVIRONMENT ---
    {
        id: "art-46",
        category: "Environment",
        title: "Declutter",
        subtitle: "Minimalism",
        image: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=800",
        color: "bg-gray-50 dark:bg-gray-950/30",
        accent: "text-gray-600 dark:text-gray-400",
        intro: "Outer order creates inner calm.",
        science: "Clutter increases cortisol and reduces focus.",
        sections: [
            { title: "Tidy Up", content: "Throw away 5 things today.", quote: "Keep only what sparks joy." }
        ],
        suggestions: ["Clean desk.", "Organize closet."],
        routine: [{ step: "Declutter", icon: Trash2 }],
        takeaway: "Live light."
    },
    {
        id: "art-47",
        category: "Environment",
        title: "Prep Environment",
        subtitle: "Design for success",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
        color: "bg-orange-50 dark:bg-orange-950/30",
        accent: "text-orange-600 dark:text-orange-400",
        intro: "Make good habits easy and bad habits hard.",
        science: "Environment design is stronger than willpower.",
        sections: [
            { title: "Setup", content: "Put gym clothes out the night before.", quote: "Context is king." }
        ],
        suggestions: ["Hide junk food.", "Put fruit on counter."],
        routine: [{ step: "Prep", icon: Check }],
        takeaway: "Set the stage."
    },
    {
        id: "art-48",
        category: "Environment",
        title: "Aromatherapy",
        subtitle: "Scent your mood",
        image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800",
        color: "bg-pink-50 dark:bg-pink-950/30",
        accent: "text-pink-600 dark:text-pink-400",
        intro: "Smell is the only sense linked directly to the emotional brain.",
        science: "Lavender reduces anxiety; peppermint boosts focus.",
        sections: [
            { title: "Diffuser", content: "Use essential oils.", quote: "Breathe in peace." }
        ],
        suggestions: ["Lavender for sleep.", "Lemon for energy."],
        routine: [{ step: "Scent", icon: Wind }],
        takeaway: "Smell success."
    },
    {
        id: "art-49",
        category: "Environment",
        title: "Music for Mood",
        subtitle: "Soundtrack your life",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800",
        color: "bg-purple-50 dark:bg-purple-950/30",
        accent: "text-purple-600 dark:text-purple-400",
        intro: "Music can instantly shift your state.",
        science: "Music releases dopamine and reduces pain perception.",
        sections: [
            { title: "Playlist", content: "Create a focus playlist.", quote: "Music is emotion." }
        ],
        suggestions: ["Lo-fi for work.", "Upbeat for gym."],
        routine: [{ step: "Music", icon: Music }],
        takeaway: "Tune in."
    },
    {
        id: "art-50",
        category: "Environment",
        title: "Lighting",
        subtitle: "Set the mood",
        image: "https://images.unsplash.com/photo-1513506003011-3b03c8b69580?auto=format&fit=crop&w=800",
        color: "bg-yellow-50 dark:bg-yellow-950/30",
        accent: "text-yellow-600 dark:text-yellow-400",
        intro: "Light affects energy and sleep.",
        science: "Bright light boosts alertness; warm light promotes relaxation.",
        sections: [
            { title: "Adjust", content: "Use warm lights in evening.", quote: "Light your way." }
        ],
        suggestions: ["Dimmer switches.", "Candles."],
        routine: [{ step: "Lighting", icon: Lightbulb }],
        takeaway: "Shine bright."
    }
]

import { Check, Calendar as CalendarIcon, Trash2, TrendingUp } from "lucide-react"
