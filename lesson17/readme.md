# Event loop

Priority
1. All from mAcrotasks
2. All from mIcrotasks
3. All from callback queue

# Details

Call stack - main stack of all calls in JS (LIFO)
Every method call goes over call stack

                   | call stack |
task1 -> add task1 |            | -> remove task1
task2 -> add task2 |            | -> remove task2
task3 -> add task3 |            | -> remove task3

All sync code is a mAcrotask!

    mIcrotask queue (then, catch finally) (FIFO)
---------------------------....---------------------------
task3 -> task2 -> task1 -> .... task3 -> task2 -> task1 ->
---------------------------....---------------------------

    callback queue (all async calls) (FIFO)
---------------------------....---------------------------
task3 -> task2 -> task1 -> .... task3 -> task2 -> task1 ->
---------------------------....---------------------------