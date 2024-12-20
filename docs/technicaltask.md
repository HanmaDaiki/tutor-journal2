---

## **Техническое задание (ТЗ)**

### **1. Общая информация о проекте**
- **Название проекта:**  
  **Журнал Репетитора**  

- **Цель проекта:**  
  Создать цифровой инструмент для решения ключевых задач репетиторов в работе с учениками, включая учет уроков, планирование, контроль домашних заданий и коммуникацию.  

---

### **2. Исходные данные и текущая ситуация**
- **Проблемы (Боли), которые решает проект:**  
  1. **Учет занятий и оплат:**  
     Репетиторы испытывают сложности с ручным учетом проведенных уроков, статусов оплаты и задолженностей.  
  2. **Планирование и перенос занятий:**  
     Частые изменения расписания приводят к путанице, особенно если не удается централизовать информацию.  
  3. **Контроль домашних заданий:**  
     Отсутствует удобный инструмент для организации и проверки ДЗ, что создает дополнительную нагрузку на репетитора.  
  4. **Коммуникация с учениками:**  
     Ведение обсуждений разбросано по разным мессенджерам и платформам, что приводит к потере информации и усложняет процесс взаимодействия.  

- **Аналоги текущих решений:**  
  Основной аналог для решения проблем репетиторов – это самостоятельное использование Excel-таблиц и других простых инструментов.  
  1. **Excel-таблицы:**  
     - Много времени на ручное заполнение.  
     - Отсутствие автоматизации.  
     - Разрозненность данных.  
  2. **Хранение материалов:**  
     - Учебные материалы, домашние задания и выполненные работы часто разбросаны по облачным хранилищам или личным устройствам.  
  3. **Общение с учениками:**  
     - Ведется через мессенджеры (WhatsApp, Telegram, Email), что создаёт хаос и неструктурированность.  

- **Итог:**  
  Существующие решения требуют много ручной работы, использования нескольких инструментов и повышают риск потери данных или путаницы.  

---

### **3. Описание продукта**
- **Функциональные требования:**  
  Продукт должен включать следующие функции:  
  1. **Авторизация и регистрация:**  
     - Вход через логин (email) и пароль.  
     - Регистрация с указанием логина (email), пароля и роли (репетитор или ученик).  
  2. **Личный кабинет (Дашборд):**  
     - Репетитор: обзор занятий, статуса оплаты, ближайших событий.  
     - Ученик: просмотр запланированных занятий, домашних заданий и комментариев.  
  3. **Журнал занятий:**  
     - Создание занятий с указанием даты, времени, ученика и темы.  
     - Просмотр проведённых и запланированных занятий.  
     - Указание статуса оплаты (оплачено/не оплачено).  
  4. **Комментирование занятий:**  
     - Оставление заметок и комментариев по занятиям, доступных обеим сторонам.  
  5. **Создание занятий:**  
     - Репетитор создаёт новые занятия с указанием всех деталей.  
  6. **Установка статуса оплаты:**  
     - Репетитор вручную отмечает статус оплаты каждого занятия.  
  7. **Главная страница (лендинг):**  
     - Приветственная страница с описанием функционала и кнопками для входа/регистрации.  

- **Нефункциональные требования:**  
  - Интуитивно понятный интерфейс для репетитора и ученика.  
  - Стабильная работа на популярных браузерах и устройствах.  
  - Защита данных (шифрование паролей, безопасность хранения данных).  

---

### **4. Технические детали**
- **Технологический стек:**  
  1. **Next.js** как фреймворк для разработки.  
  2. **FSD (Feature-Sliced Design)** для организации структуры проекта.  
  3. **Prisma** для работы с базой данных.  
  4. **PostgreSQL** как основная база данных.  
  5. **Material-UI (MUI)** как UI-фреймворк для интерфейсов.  

---