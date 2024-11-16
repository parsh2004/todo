# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


~~~
# Additional Findings
# 1. Severity Prediction with Random Forest
severity_X = data.drop(columns=['motor_UPDRS', 'total_UPDRS', 'measurement_id', 'subject#'])
severity_y = data['total_UPDRS']
X_train_severity, X_test_severity, y_train_severity, y_test_severity = train_test_split(severity_X, severity_y, test_size=0.2, random_state=42)
rf_model = RandomForestRegressor(random_state=42)
rf_model.fit(X_train_severity, y_train_severity)
y_pred_severity = rf_model.predict(X_test_severity)
print(f"Random Forest MSE for Severity Prediction: {mean_squared_error(y_test_severity, y_pred_severity):.2f}")
# 2. Disease Progression Over Time
progression_data = data[['test_time', 'total_UPDRS', 'subject#']].sort_values(by=['subject#', 'test_time'])
sample_subject = progression_data[progression_data['subject#'] == 1]
plt.plot(sample_subject['test_time'], sample_subject['total_UPDRS'], marker='o')
plt.title("Disease Progression Over Time for Subject #1")
plt.xlabel("Test Time")
plt.ylabel("Total UPDRS Score")
plt.show()
# 3. Gender and Age Impact
gender_analysis = data.groupby('sex')[['motor_UPDRS', 'total_UPDRS']].mean()
print("Gender Analysis:")
print(gender_analysis)

sns.scatterplot(data=data, x='age', y='total_UPDRS', hue='sex', palette='coolwarm')
plt.title("Impact of Age and Gender on Total UPDRS")
plt.xlabel("Age")
plt.ylabel("Total UPDRS Score")
plt.show()
~~~
