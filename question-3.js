/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: Big O = O(n) เพราะเป็น function search ที่เข้าถึงข้อมูลทุกตัวในarray ใช้เวลาคงที่และแน่นอน ถ้าข้อมูลมีจำนวนมาจะใช้เวลามาก


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: Big O = O(log n) เพราะเป็น function binary search ที่มีโอกาสที่จะได้ข้อมูลที่ต้องการ โดยไม่จำเป็นที่ต้องเข้าถึงindex ทุกตัวใน array ถ้าเรียงลำดับมาแล้ว แต่ในcaseนี้ price ไม่ถูกเรียงมา


*/

/* 
Which function is more efficient and why?
Answer: Function findStudentById. มี efficient มากกว่า เพราะมีข้อมูลที่ไม่เยอะ และข้อมูลใน question-2 ไม่ถูกเรียงลำดับมา ถ้าถูกเรียงลำดับมา จะมีefficientมากกว่า ถ้ามีปริมาณข้อมูลมาก


*/
