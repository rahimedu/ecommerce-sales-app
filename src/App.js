
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavComponent />
      <Switch>
        <Route exact path="/ReactEcommerce" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={productDetails} />
        <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
