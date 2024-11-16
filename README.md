# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


~~~

# 3. Gender and Age Impact
gender_analysis = data.groupby('sex')[['motor_UPDRS', 'total_UPDRS']].mean()
print("Gender Analysis:")
print(gender_analysis)

sns.scatterplot(data=data, x='age', y='total_UPDRS', hue='sex', palette='coolwarm')
plt.title("Impact of Age and Gender on Total UPDRS")
plt.xlabel("Age")
plt.ylabel("Total UPDRS Score")
plt.show()
# 4. Acoustic Feature-Based Prediction
acoustic_features = [col for col in data.columns if 'Jitter' in col or 'Shimmer' in col or col in ['NHR', 'HNR', 'RPDE', 'DFA', 'PPE']]
X_acoustic = data[acoustic_features]
y_acoustic = data['total_UPDRS']
X_train_acoustic, X_test_acoustic, y_train_acoustic, y_test_acoustic = train_test_split(X_acoustic, y_acoustic, test_size=0.2, random_state=42)
acoustic_model = RandomForestRegressor(random_state=42)
acoustic_model.fit(X_train_acoustic, y_train_acoustic)
y_pred_acoustic = acoustic_model.predict(X_test_acoustic)
print(f"Acoustic Feature MSE: {mean_squared_error(y_test_acoustic, y_pred_acoustic):.2f}")
~~~
