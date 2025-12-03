(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/habit-tracker-design/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://xzdldkwviiayysltizmz.supabase.co") || '';
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZGxka3d2aWlheXlzbHRpem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTQ0MDgsImV4cCI6MjA4MDA3MDQwOH0.0f2202Q52H0DbFmPL9wr2tjPYEmafAHHBd_E9mSbCmo") || '';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHabits",
    ()=>defaultHabits,
    "formatDate",
    ()=>formatDate,
    "getDayName",
    ()=>getDayName,
    "getFullDayName",
    ()=>getFullDayName,
    "getTodayQuote",
    ()=>getTodayQuote,
    "microArticles",
    ()=>microArticles,
    "motivationalQuotes",
    ()=>motivationalQuotes
]);
const motivationalQuotes = [
    {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Small daily improvements over time lead to stunning results.",
        author: "Robin Sharma"
    },
    {
        text: "You do not rise to the level of your goals. You fall to the level of your systems.",
        author: "James Clear"
    },
    {
        text: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Rohn"
    },
    {
        text: "The chains of habit are too light to be felt until they are too heavy to be broken.",
        author: "Warren Buffett"
    },
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "First we make our habits, then our habits make us.",
        author: "John Dryden"
    },
    {
        text: "Your future is created by what you do today, not tomorrow.",
        author: "Robert Kiyosaki"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    }
];
const microArticles = [
    {
        id: "1",
        title: "The 1% Rule",
        content: "Getting 1% better every day means you'll be 37 times better by the end of the year. Small improvements compound into remarkable results. Focus on tiny gains, not giant leaps.",
        category: "Atomic Habits",
        readTime: "1 min",
        emoji: "📈"
    },
    {
        id: "2",
        title: "Habit Stacking",
        content: "Link a new habit to an existing one: 'After I [CURRENT HABIT], I will [NEW HABIT].' Your brain already has neural pathways for existing habits—use them as launching pads.",
        category: "Behavior Design",
        readTime: "1 min",
        emoji: "🔗"
    },
    {
        id: "3",
        title: "Environment Design",
        content: "Make good habits obvious and bad habits invisible. Put your running shoes by the door. Hide the snacks. Your environment shapes your behavior more than willpower ever will.",
        category: "Environment",
        readTime: "1 min",
        emoji: "🏠"
    },
    {
        id: "4",
        title: "The Two-Minute Rule",
        content: "Scale any habit down to two minutes: 'Read before bed' becomes 'Read one page.' Master the art of showing up before optimizing. Consistency beats intensity.",
        category: "Starting Small",
        readTime: "1 min",
        emoji: "⏱️"
    },
    {
        id: "5",
        title: "Temptation Bundling",
        content: "Pair something you need to do with something you want to do. Only listen to your favorite podcast while exercising. Make habits irresistible.",
        category: "Motivation",
        readTime: "1 min",
        emoji: "🎁"
    },
    {
        id: "6",
        title: "Keystone Habits",
        content: "Some habits trigger a cascade of other positive changes. Exercise often leads to better eating, more energy, and improved focus. Find your keystone habit.",
        category: "Systems",
        readTime: "1 min",
        emoji: "🔑"
    },
    {
        id: "7",
        title: "Never Miss Twice",
        content: "Missing once is an accident. Missing twice is the start of a new habit. If you break your streak, get back on track immediately. The best never let one bad day become two.",
        category: "Resilience",
        readTime: "1 min",
        emoji: "🎯"
    },
    {
        id: "8",
        title: "Identity-Based Habits",
        content: "Don't focus on what you want to achieve—focus on who you wish to become. Each habit is a vote for your new identity. Become the person who never misses a workout.",
        category: "Mindset",
        readTime: "1 min",
        emoji: "🪞"
    }
];
const defaultHabits = [
    {
        name: "Meditate",
        emoji: "🧘",
        color: "#0A5F4E"
    },
    {
        name: "Workout",
        emoji: "💪",
        color: "#E85D4C"
    },
    {
        name: "Read 10 pages",
        emoji: "📚",
        color: "#5B8DEF"
    },
    {
        name: "Drink 8 glasses of water",
        emoji: "💧",
        color: "#4ECDC4"
    },
    {
        name: "Journal",
        emoji: "✍️",
        color: "#9B59B6"
    },
    {
        name: "No social media until noon",
        emoji: "📵",
        color: "#F39C12"
    }
];
function getTodayQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    return motivationalQuotes[dayOfYear % motivationalQuotes.length];
}
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function getDayName(dayIndex) {
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    return days[dayIndex];
}
function getFullDayName(dayIndex) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return days[dayIndex];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addHabit",
    ()=>addHabit,
    "archiveHabit",
    ()=>archiveHabit,
    "deleteAllHabits",
    ()=>deleteAllHabits,
    "deleteHabit",
    ()=>deleteHabit,
    "getCompletions",
    ()=>getCompletions,
    "getCompletionsForDate",
    ()=>getCompletionsForDate,
    "getHabits",
    ()=>getHabits,
    "getLongestStreak",
    ()=>getLongestStreak,
    "getStreak",
    ()=>getStreak,
    "isCompleted",
    ()=>isCompleted,
    "isOnboardingComplete",
    ()=>isOnboardingComplete,
    "saveCompletions",
    ()=>saveCompletions,
    "saveHabits",
    ()=>saveHabits,
    "setOnboardingComplete",
    ()=>setOnboardingComplete,
    "syncWithSupabase",
    ()=>syncWithSupabase,
    "toggleCompletion",
    ()=>toggleCompletion,
    "updateHabit",
    ()=>updateHabit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/supabase.ts [app-client] (ecmascript)");
;
;
const HABITS_KEY = "vybe_habits";
const COMPLETIONS_KEY = "vybe_completions";
const ONBOARDING_KEY = "vybe_onboarding_complete";
function getHabits() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(HABITS_KEY);
    return stored ? JSON.parse(stored) : [];
}
function saveHabits(habits) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(HABITS_KEY, JSON.stringify(habits));
}
async function syncWithSupabase(userId) {
    console.log("Starting syncWithSupabase for user:", userId);
    try {
        // 1. Fetch habits
        const { data: habits, error: habitsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').select('*').eq('user_id', userId);
        if (habitsError) {
            console.error("Error fetching habits:", habitsError);
            throw habitsError;
        }
        console.log("Fetched habits from Supabase:", habits.length);
        // Check if server is empty but local has data (First time sync for guest -> user)
        if (habits.length === 0) {
            const localHabits = getHabits();
            if (localHabits.length > 0) {
                console.log("Pushing local data to Supabase...", localHabits);
                // Push habits
                for (const h of localHabits){
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').upsert({
                        id: h.id,
                        user_id: userId,
                        name: h.name,
                        emoji: h.emoji,
                        color: h.color,
                        reminder_time: h.reminderTime,
                        repeat_days: h.repeatDays,
                        created_at: h.createdAt,
                        archived: h.archived
                    });
                    if (error) {
                        console.error("Failed to push habit:", h.name, error);
                        throw error;
                    }
                }
                // Push completions
                const localCompletions = getCompletions();
                for (const c of localCompletions){
                    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habit_logs').upsert({
                        habit_id: c.habitId,
                        completed_at: c.date,
                        created_at: c.completedAt
                    });
                    if (error) console.error("Failed to push log:", c, error);
                }
                console.log("Push complete.");
                return "Synced local data to cloud.";
            }
        } else {
            console.log("Server has data, pulling...", habits.length);
        }
        // 2. Fetch logs
        const { data: logs, error: logsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habit_logs').select('*').in('habit_id', habits.map((h)=>h.id));
        if (logsError) throw logsError;
        // 3. Map and Save
        const mappedHabits = habits.map((h)=>({
                id: h.id,
                name: h.name,
                emoji: h.emoji,
                color: h.color,
                reminderTime: h.reminder_time,
                repeatDays: h.repeat_days,
                createdAt: h.created_at,
                archived: h.archived
            }));
        const mappedCompletions = logs.map((l)=>({
                habitId: l.habit_id,
                date: l.completed_at,
                completedAt: l.created_at
            }));
        saveHabits(mappedHabits);
        saveCompletions(mappedCompletions);
        // Notify components to refresh
        if ("TURBOPACK compile-time truthy", 1) {
            window.dispatchEvent(new Event('vybe_data_updated'));
        }
        return "Synced data from cloud.";
    } catch (error) {
        console.error("Sync failed:", error);
        return `Sync failed: ${error.message || error}`;
    }
}
function addHabit(habit) {
    const habits = getHabits();
    habits.push(habit);
    saveHabits(habits);
    // Sync to Supabase
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
        if (user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').upsert({
                id: habit.id,
                user_id: user.id,
                name: habit.name,
                emoji: habit.emoji,
                color: habit.color,
                reminder_time: habit.reminderTime,
                repeat_days: habit.repeatDays,
                created_at: habit.createdAt,
                archived: habit.archived
            }).then(({ error })=>{
                if (error) console.error("Supabase add failed:", error);
            });
        }
    });
}
function updateHabit(updatedHabit) {
    const habits = getHabits();
    const index = habits.findIndex((h)=>h.id === updatedHabit.id);
    if (index !== -1) {
        habits[index] = updatedHabit;
        saveHabits(habits);
        // Sync to Supabase
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
            if (user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').update({
                    name: updatedHabit.name,
                    emoji: updatedHabit.emoji,
                    color: updatedHabit.color,
                    reminder_time: updatedHabit.reminderTime,
                    repeat_days: updatedHabit.repeatDays,
                    archived: updatedHabit.archived
                }).eq('id', updatedHabit.id).then(({ error })=>{
                    if (error) console.error("Supabase update failed:", error);
                });
            }
        });
    }
}
function archiveHabit(habitId) {
    const habits = getHabits();
    const index = habits.findIndex((h)=>h.id === habitId);
    if (index !== -1) {
        habits[index].archived = true;
        saveHabits(habits);
        // Sync to Supabase
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
            if (user) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').update({
                    archived: true
                }).eq('id', habitId).then(({ error })=>{
                    if (error) console.error("Supabase archive failed:", error);
                });
            }
        });
    }
}
function deleteHabit(habitId) {
    const habits = getHabits().filter((h)=>h.id !== habitId);
    saveHabits(habits);
    // Sync to Supabase
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
        if (user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').delete().eq('id', habitId).then(({ error })=>{
                if (error) console.error("Supabase delete failed:", error);
            });
        }
    });
}
function deleteAllHabits() {
    saveHabits([]);
    // Sync to Supabase
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
        if (user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habits').delete().eq('user_id', user.id).then(({ error })=>{
                if (error) console.error("Supabase delete all failed:", error);
            });
        }
    });
}
function getCompletions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(COMPLETIONS_KEY);
    return stored ? JSON.parse(stored) : [];
}
function saveCompletions(completions) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(COMPLETIONS_KEY, JSON.stringify(completions));
}
function toggleCompletion(habitId, date) {
    const completions = getCompletions();
    const existingIndex = completions.findIndex((c)=>c.habitId === habitId && c.date === date);
    let isCompleted = false;
    let completionData = null;
    if (existingIndex !== -1) {
        completions.splice(existingIndex, 1);
        saveCompletions(completions);
        isCompleted = false;
    } else {
        completionData = {
            habitId,
            date,
            completedAt: new Date().toISOString()
        };
        completions.push(completionData);
        saveCompletions(completions);
        isCompleted = true;
    }
    // Sync to Supabase
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data: { user } })=>{
        if (user) {
            if (isCompleted && completionData) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habit_logs').upsert({
                    habit_id: habitId,
                    completed_at: date,
                    created_at: completionData.completedAt
                }).then(({ error })=>{
                    if (error) console.error("Supabase completion add failed:", error);
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('habit_logs').delete().match({
                    habit_id: habitId,
                    completed_at: date
                }).then(({ error })=>{
                    if (error) console.error("Supabase completion delete failed:", error);
                });
            }
        }
    });
    return isCompleted;
}
function isCompleted(habitId, date) {
    const completions = getCompletions();
    return completions.some((c)=>c.habitId === habitId && c.date === date);
}
function getStreak(habitId) {
    const completions = getCompletions().filter((c)=>c.habitId === habitId);
    const habit = getHabits().find((h)=>h.id === habitId);
    if (!habit || completions.length === 0) return 0;
    const sortedDates = [
        ...new Set(completions.map((c)=>c.date))
    ].sort().reverse();
    let streak = 0;
    const currentDate = new Date();
    // Check if today is completed
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(currentDate);
    const todayCompleted = sortedDates.includes(todayStr);
    if (!todayCompleted) {
        // Check yesterday
        currentDate.setDate(currentDate.getDate() - 1);
    }
    while(true){
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(currentDate);
        const dayOfWeek = currentDate.getDay();
        // Only count days that are in the repeat schedule
        if (habit.repeatDays.includes(dayOfWeek)) {
            if (sortedDates.includes(dateStr)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        } else {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        // Safety limit
        if (streak > 1000) break;
    }
    return streak;
}
function getLongestStreak(habitId) {
    const completions = getCompletions().filter((c)=>c.habitId === habitId);
    if (completions.length === 0) return 0;
    const sortedDates = [
        ...new Set(completions.map((c)=>c.date))
    ].sort();
    let longestStreak = 1;
    let currentStreak = 1;
    for(let i = 1; i < sortedDates.length; i++){
        const prevDate = new Date(sortedDates[i - 1]);
        const currDate = new Date(sortedDates[i]);
        const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86400000);
        if (diffDays === 1) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            currentStreak = 1;
        }
    }
    return longestStreak;
}
function getCompletionsForDate(date) {
    return getCompletions().filter((c)=>c.date === date);
}
function isOnboardingComplete() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem(ONBOARDING_KEY) === "true";
}
function setOnboardingComplete() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(ONBOARDING_KEY, "true");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/habit-tracker-design/components/auth-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/habit-tracker-design/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    session: null,
    loading: true,
    signInWithGoogle: async ()=>{},
    signOut: async ()=>{}
});
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check active session
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession().then({
                "AuthProvider.useEffect": ({ data: { session } })=>{
                    setSession(session);
                    setUser(session?.user ?? null);
                    if (session?.user) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncWithSupabase"])(session.user.id);
                    }
                    setLoading(false);
                }
            }["AuthProvider.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "AuthProvider.useEffect": (_event, session)=>{
                    setSession(session);
                    setUser(session?.user ?? null);
                    setLoading(false);
                    if (session?.user) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncWithSupabase"])(session.user.id);
                    }
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>subscription.unsubscribe()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    const signInWithGoogle = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/`
            }
        });
        if (error) console.error("Google Sign In Error:", error);
    };
    const signOut = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setUser(null);
        setSession(null);
    // We don't clear local storage to allow offline access to previously synced data
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            session,
            loading,
            signInWithGoogle,
            signOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/habit-tracker-design/components/auth-provider.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}
_s(AuthProvider, "sIDOCMze9iVqwxkgWIhOu8vskSI=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$habit$2d$tracker$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_habit-tracker-design_ad616354._.js.map